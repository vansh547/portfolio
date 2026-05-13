// Edit this file to update your portfolio content.
// Resume PDF can be replaced anytime at: /app/frontend/public/assets/Vansh_Gupta_Resume.pdf

export const profile = {
  name: "Vansh Gupta",
  role: "AI / ML Developer",
  tagline: "Building intelligent systems, one model at a time.",
  bio: "I am a 6th semester B.E. student focused on Artificial Intelligence and Machine Learning. I build practical ML models from scratch, design AI-powered assistants, and ship full-stack applications around them.",
  location: "Bangalore, India",
  email: "vansh.g@gmail.com",
  phone: "7451879112",
  github: "https://github.com/vansh547",
  linkedin: "https://www.linkedin.com/in/vansh-gupta-3999063a6/",
  resumeUrl: "/assets/Vansh Gupta resume.pdf",
};

export const aiProjects = [
  {
    title: "Nova — AI Desktop Assistant",
    repo: "https://github.com/vansh547/NOVA.git",
    description:
      "Modular desktop assistant powered by Gemini 2.5 Flash. Architected a non-blocking asynchronous system for real-time speech-to-text and localized multilingual synthesis.",
    stack: ["Python", "Threading", "gTTS", "PyAutoGUI", "Gemini 2.5 Flash"],
  },
  {
    title: "DocGPT — Medical Chatbot",
    repo: "https://github.com/vansh547/DOCGPT.git",

    description:
      "Multimodal medical chatbot utilizing Gemini 1.5 Flash. Includes document parsing for lab results and context-aware logic for symptom analysis.",
    stack: ["API Integration", "Flask", "Pandas", "Gemini 1.5 Flash"],
  },
];

export const mlProjects = [
  {
    title: "Car Price Prediction",
    repo: "https://github.com/vansh547/Car-prediction-model.git",
    description:
      "Built a Linear Regression model from scratch using NumPy. Focused on cost-function minimization and feature encoding to predict vehicle resale values.",
    stack: ["NumPy", "Pandas", "Matplotlib", "Linear Regression"],
  },
  {
    title: "Customer Churn Prediction",
    repo: "https://github.com/vansh547/customer-Churn-prediction-model.git",
    description:
      "Classification pipeline identifying at-risk users based on usage patterns. Developed actionable retention strategies via deep correlation analysis.",
    stack: ["Scikit-learn", "Seaborn", "EDA", "Classification"],
  },
];

export const fullStackProjects = [
  {
    title: "Full-Stack Developer Portfolio & Contact Management System",
    repo: "https://github.com/vansh547/DOCGPT.git",
    description:
      "Architected a full-stack portfolio using React and FastAPI to showcase AI/ML projects. Built a custom contact engine with a PostgreSQL cloud database (Neon) for persistent lead management, replacing third-party form tools with a secure, scalable REST API.",
    stack: ["React.js", "Tailwind CSS", "FastAPI", "Starlette", "PostgreSQL", "SQL", "Neon (Cloud SQL)", "Vercel (Frontend Deployment)"],
  },
];

export const skills = {
  languages: ["Python", "HTML", "CSS", "SQL"],
  ml: [
    "Linear Regression",
    "Binary Classification",
    "Feature Engineering",
    "Data Cleaning",
    "EDA",
    "Data Analysis",
  ],
  libraries: ["NumPy", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
  databases: ["MongoDB", "SQL", "SQLite"],
  frameworks: ["Flask"],
  tools: ["VS Code", "Jupyter Notebook", "Render", "Git", "Deployment"],
};

export const skillsMarquee = [
  "Python",
  "NumPy",
  "Pandas",
  "Scikit-learn",
  "Flask",
  "MongoDB",
  "EDA",
  "Linear Regression",
  "Classification",
  "Matplotlib",
  "Seaborn",
  "SQL",
  "Feature Engineering",
  "Data Analysis",
];

export const navLinks = [
  { id: "home", label: "home" },
  { id: "projects", label: "projects" },
  { id: "skills", label: "skills" },
  { id: "resume", label: "resume" },
  { id: "contact", label: "contact" },
];
