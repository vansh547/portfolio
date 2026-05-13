# Portfolio PRD — Vansh Gupta

## Original problem statement
Build a college-student portfolio for Vansh Gupta (6th sem B.E., AI/ML, Bangalore) with: Hero/About, Projects (2 AI + 2 ML models), Skills/Tech stack, Resume (downloadable PDF, replaceable), Contact form. Dark & Tech (developer/code-inspired) theme with animations.

## Architecture
- React (CRA + craco) frontend, FastAPI backend, MongoDB.
- Single-page scroll, smooth-anchored sections.
- Content sourced from /app/frontend/src/data/portfolio.js for easy edits.
- Resume PDF served as static asset at /assets/Vansh_Gupta_Resume.pdf — replaceable.

## Implemented (May 2026)
- [x] Hero with terminal aesthetic + typing animation + status pill
- [x] About section with stats grid
- [x] Projects: 2 AI cards (Nova, DocGPT), 2 ML cards (Car, Churn) with GitHub links + tech pills
- [x] Skills: 6 categorized groups + kinetic marquee background
- [x] Resume: download_cv + view_in_tab buttons + experience timeline
- [x] Contact form → POST /api/contact → MongoDB
- [x] Footer with social links
- [x] data-testid coverage on all interactive elements
- [x] Source code zip at /downloads/vansh-portfolio-source.zip

## Backlog (P1/P2)
- P1: SEO meta tags + OG image
- P1: Add a "Now / Currently Learning" widget
- P2: Blog/Writings section
- P2: Admin panel to edit projects without code changes
- P2: Visitor analytics dashboard for the contact form
- P2: Theme switcher (dark/light/CRT)

## Test status
- Iteration 1: 100% backend, 100% frontend (see /app/test_reports/iteration_1.json)
