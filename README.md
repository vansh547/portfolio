# Vansh Gupta — AI/ML Developer Portfolio

A dark, terminal-themed portfolio built with React + FastAPI + MongoDB.

## ✨ Features
- Animated terminal-aesthetic Hero with typing animation (`react-type-animation`)
- Sections: About, Projects (AI + ML), Skills, Resume, Contact
- Resume PDF download (replaceable)
- Working Contact form persisted to MongoDB
- Smooth-scroll nav, framer-motion reveals, kinetic skills marquee

## 🗂 File Structure

```
/app
├── backend/
│   ├── server.py              # FastAPI app, /api routes (status, contact)
│   ├── requirements.txt
│   └── .env                   # MONGO_URL, DB_NAME, CORS_ORIGINS
│
├── frontend/
│   ├── package.json
│   ├── tailwind.config.js
│   ├── craco.config.js
│   ├── public/
│   │   ├── index.html         # JetBrains Mono + IBM Plex Sans loaded
│   │   ├── assets/
│   │   │   └── Vansh_Gupta_Resume.pdf   # ← replace this file anytime
│   │   └── downloads/
│   │       └── vansh-portfolio-source.zip
│   └── src/
│       ├── App.js
│       ├── App.css
│       ├── index.css           # design tokens, terminal utilities
│       ├── data/
│       │   └── portfolio.js   # ← edit content here (name, projects, skills)
│       ├── pages/
│       │   └── Portfolio.jsx
│       └── components/
│           ├── Navbar.jsx
│           ├── Hero.jsx
│           ├── About.jsx
│           ├── Projects.jsx
│           ├── Skills.jsx
│           ├── Resume.jsx
│           ├── Contact.jsx
│           └── Footer.jsx
│
└── design_guidelines.json
```

## 🔧 How to update content
| Want to change… | Edit |
|---|---|
| Name, bio, contact info, social links | `frontend/src/data/portfolio.js` |
| Projects (AI / ML) | `frontend/src/data/portfolio.js` (`aiProjects`, `mlProjects`) |
| Skills / tools | `frontend/src/data/portfolio.js` (`skills`, `skillsMarquee`) |
| Resume PDF | replace `frontend/public/assets/Vansh_Gupta_Resume.pdf` |
| Section text/order | components in `frontend/src/components/*` |

## 🚀 Run locally
```bash
# Backend
cd backend
pip install -r requirements.txt
uvicorn server:app --reload --port 8001

# Frontend
cd frontend
yarn install
yarn start
```

Set `frontend/.env`: `REACT_APP_BACKEND_URL=http://localhost:8001`
Set `backend/.env`: `MONGO_URL=mongodb://localhost:27017`, `DB_NAME=portfolio`

## 📡 API
- `GET  /api/`           → health check
- `POST /api/contact`    → `{name, email, message}` saves to `db.contacts`
- `GET  /api/contact`    → list submissions

Built with ♥ for AI/ML.
