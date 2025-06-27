# 🧠 MERN B2B Frontend – Project Management App (React, Vite, Tailwind)

A clean, responsive, and performant frontend interface for a team collaboration platform inspired by Jira — built with **React + Vite** and deployed on **Vercel**.

---

## 🚀 Tech Stack

- **Framework:** React (Vite)
- **Styling:** TailwindCSS + ShadCN UI
- **State/Data:** React Query, Zustand (optional)
- **Routing:** React Router
- **Deployment:** Vercel
- **Auth:** Google Sign-In (via backend )

---

## 📦 Features

- 🔐 Google Sign-In (OAuth handled by backend)
- 📁 Project, Epic, Task boards
- 📊 Dashboard + Analytics UI
- 🔍 Filters, Search, Pagination
- 🧙 Responsive UI with TailwindCSS and ShadcnUI
- 🪄 SPA support with client-side routing

---

## 📁 Folder Structure

client/
├── src/
│ ├── components/
│ ├── pages/
│ ├── hooks/
│ ├── api/
│ └── main.tsx
├── public/
├── .env
└── package.json

---

## ⚙️ Setup Instructions

### 1. Clone the repo

```bash
git  clone https://github.com/ajeshs02/mern-b2b-frontend.git .
cd mern-b2b-frontend
```

### 2. Install dependencies

npm install

### 3. Setup environment variables (.env)

VITE_API_BASE_URL=https://mern-b2b-backend.run.app/api

### 4. Run in development

npm run dev

## ⚙️ Docker Instructions

### 1. Build the Docker image

docker build -t mern-b2b-frontend .

### 2. Run locally

docker run -p 5173:5173 mern-b2b-frontend
