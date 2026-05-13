from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
import os
import logging
import uuid
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List
from datetime import datetime, timezone
import databases
import sqlalchemy

# Configuration
ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# Pull DATABASE_URL from environment (Vercel will provide this)
DATABASE_URL = os.environ.get("DATABASE_URL")

database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

# Define SQL Tables
status_checks = sqlalchemy.Table(
    "status_checks",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.String, primary_key=True),
    sqlalchemy.Column("client_name", sqlalchemy.String),
    sqlalchemy.Column("timestamp", sqlalchemy.String),
)

contacts = sqlalchemy.Table(
    "contacts",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.String, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String),
    sqlalchemy.Column("email", sqlalchemy.String),
    sqlalchemy.Column("message", sqlalchemy.String),
    sqlalchemy.Column("timestamp", sqlalchemy.String),
)

# Standard SQL engine for PostgreSQL
engine = sqlalchemy.create_engine(DATABASE_URL)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()
api_router = APIRouter(prefix="/api")

# Add Middleware BEFORE including the router
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)
# ===== Models =====
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactCreate(BaseModel):
    name: str = Field(..., min_length=1, max_length=120)
    email: EmailStr
    message: str = Field(..., min_length=1, max_length=5000)

class Contact(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    message: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))

# ===== Lifecycle =====
@app.on_event("startup")
async def startup():
    # Create tables on startup if they don't exist
    metadata.create_all(engine) 
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

# ===== Routes =====
@api_router.get("/")
async def root():
    return {"message": "Portfolio API live (SQL Edition)"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    obj = StatusCheck(**input.model_dump())
    query = status_checks.insert().values(
        id=obj.id, client_name=obj.client_name, timestamp=obj.timestamp.isoformat()
    )
    await database.execute(query)
    return obj

@api_router.post("/contact", response_model=Contact)
async def create_contact(payload: ContactCreate):
    try:
        obj = Contact(**payload.model_dump())
        query = contacts.insert().values(
            id=obj.id, name=obj.name, email=obj.email, message=obj.message, timestamp=obj.timestamp.isoformat()
        )
        await database.execute(query)
        return obj
    except Exception as e:
        logger.exception("SQL Save Failed")
        raise HTTPException(status_code=500, detail="Database error.")

@api_router.get("/contact", response_model=List[Contact])
async def list_contacts():
    query = contacts.select().order_by(sqlalchemy.desc(contacts.c.timestamp))
    return await database.fetch_all(query)

app.include_router(api_router)
app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include the router ONCE
app.include_router(api_router)

# Vercel entry point
handler = app