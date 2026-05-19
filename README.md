# GitHub Repo Analyzer AI

An AI-powered web application that analyzes GitHub repositories and automatically generates:

- Project summaries
- Tech stack insights
- LinkedIn-ready posts
- Resume bullet points

This project uses:

- n8n workflow automation
- OpenAI API
- GitHub REST API
- HTML/CSS/JavaScript frontend

---

# Features

✅ Analyze any public GitHub repository

✅ Fetch repository data dynamically using GitHub API

✅ AI-generated project summary

✅ AI-generated tech stack overview

✅ AI-generated LinkedIn post

✅ AI-generated resume bullet points

✅ Modern responsive UI

✅ Automated workflow using n8n

---

# Tech Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend Automation
- n8n

## APIs
- OpenAI API
- GitHub REST API

## AI Model
- GPT-5 Mini / OpenAI Chat Model

---

# Project Workflow

1. User enters GitHub repository URL
2. Frontend sends request to n8n webhook
3. n8n extracts repository details
4. GitHub API fetches repository metadata
5. OpenAI analyzes repository information
6. AI generates:
   - Summary
   - Tech stack
   - LinkedIn content
   - Resume points
7. Frontend displays generated content

# Folder Structure

```bash
repo-analyzer/
│
├── index.html
├── style.css
├── script.js
├── workflow.png
└── README.md
```

---

# Setup Instructions

## 1. Clone Repository

```bash
git clone https://github.com/your-username/github-repo-analyzer-ai.git
```

---

## 2. Open Project

Open the project folder in VS Code.

---

## 3. Configure n8n Webhook

Replace your webhook URL inside:

```javascript
script.js
```

Example:

```javascript
const WEBHOOK_URL = "YOUR_N8N_WEBHOOK_URL";
```

---

## 4. Configure OpenAI in n8n

Inside n8n:

- Add OpenAI Chat Model node
- Add your OpenAI API key
- Connect with Basic LLM Chain

---

## 5. Run Frontend

Simply open:

```bash
index.html
```

in your browser.

---

# Example Use Cases

- Portfolio project analysis
- Resume generation
- LinkedIn content creation
- Project documentation assistant
- Developer productivity tool

---

# Future Improvements

- Repository code parsing
- README analysis
- Multi-language support
- Deployment support
- GitHub authentication
- Dark mode
- PDF export

---

# Author

Aadya Mishra

---

# License

This project is licensed under the MIT License.
