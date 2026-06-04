<div align="center">

# ✨ AuraTask
### Professional Task Management Application

*Organize your day. Build better habits. Stay focused.*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-aurataskv1.netlify.app-00C7B7?style=for-the-badge)](https://aurataskv1.netlify.app)
[![GitHub Copilot](https://img.shields.io/badge/Built_with-GitHub_Copilot-181717?style=for-the-badge&logo=github)](https://github.com/features/copilot)
[![AI Skills Fest](https://img.shields.io/badge/Microsoft-AI_Skills_Fest_2026-0078D4?style=for-the-badge&logo=microsoft)](https://developer.microsoft.com/en-us/ai-skills-fest)
[![Track](https://img.shields.io/badge/Track-Creative_Apps-6366F1?style=for-the-badge)](https://aka.ms/AgentsLeague/AISF)
[![License](https://img.shields.io/badge/License-MIT-22c55e?style=for-the-badge)](LICENSE)

**Submitted to Microsoft Agents League @ AI Skills Fest 2026 — Creative Apps Track**
**Developer: S.M. Rafiu · [@smrafiu](https://github.com/smrafiu)**

</div>

---

## 📖 Overview

**AuraTask** is a modern, full-featured task management web application built with a sleek dark dashboard. It brings together everything you need to stay productive — task management, habit tracking, quick notes, data analytics, and a built-in Pomodoro focus timer — in a single, fast, offline-capable app that runs entirely in your browser.

**No backend. No login. No dependencies. Just open and use.**

🔗 **Live App → [aurataskv1.netlify.app](https://aurataskv1.netlify.app)**
📁 **Repository → [github.com/smrafiu/AuraTask](https://github.com/smrafiu/AuraTask)**

---

## 🤖 How GitHub Copilot Built AuraTask

This entire project was developed using **GitHub Copilot** (free plan) at [github.com/copilot](https://github.com/copilot) — from structuring the project to fixing real bugs across multiple files.

### The Build Process

**Phase 1 — Design & Prototype**
A complete single-file HTML prototype was created with all UI, logic, and styling. This became the foundation handed to Copilot.

**Phase 2 — GitHub Copilot Structures the Project**
Using a master prompt, GitHub Copilot took the full prototype and:
- Split 1,200+ lines of HTML into a clean professional multi-file architecture
- Created `css/style.css` and six separate `js/` modules
- Rebuilt `index.html` with all file links properly connected
- Generated the initial `README.md`
- Produced every file using Copilot's **Allow / Create File** workflow — one prompt, full project output

**Phase 3 — Bug Fixes with Copilot Assistance**
GitHub Copilot identified and helped fix real issues discovered during testing:

| Bug | Root Cause | Fix Applied |
|---|---|---|
| Mobile sidebar footer invisible | `flex` overflow hiding footer | Added `min-height:0` and `flex-shrink:0` |
| Typing name triggered photo upload | `onclick` on entire profile card | Moved handler to avatar circle only |
| Search bar not filtering | `doSearch()` not wired to all views | Reconnected function to tasks, notes, habits |
| List/Kanban/Calendar tabs had side gaps | `width:fit-content` on tab container | Changed to `width:100%` with `flex:1` tabs |
| Analytics chart overflowed into text | No height cap on bar elements | Capped at `100px`, added `overflow:hidden` |
| Clear All Data button looked unstyled | Missing danger button CSS | Redesigned with red gradient matching UI |
| Settings profile spacing uneven | `align-items:flex-start` misalignment | Fixed with `center` alignment and `min-width:0` |

**Phase 4 — Deployment**
The final project was connected to **Netlify** from this GitHub repository and deployed in minutes with zero configuration.

### What GitHub Copilot Made Possible

| Without GitHub Copilot | With GitHub Copilot |
|---|---|
| Manually splitting 1,200+ lines by hand | Clean file structure generated in minutes |
| Writing repetitive module boilerplate | Instant scaffolding with correct imports |
| Debugging across files alone | AI-assisted bug detection and fixes |
| Hours of project setup | Production-ready architecture immediately |
| Writing documentation from scratch | README generated with full project context |

---

## 🏗️ Architecture

```
AuraTask — Browser App
│
├── index.html                 ← Entry point, layout, modal shells
│
├── css/
│   └── style.css              ← Dark theme, CSS variables, animations, responsive
│
└── js/
    ├── app.js                 ← Boot, state management, navigation, global search
    ├── tasks.js               ← Task CRUD, List / Kanban / Calendar views, filters
    ├── habits.js              ← Habit tracking, daily logging, 7-day streak grid
    ├── notes.js               ← Notes create, delete, full-text search
    ├── analytics.js           ← Bar chart, donut chart, 14-week heatmap
    └── settings.js            ← Profile, preferences, Pomodoro timer, export/import

Data layer: Browser localStorage (at4_tasks, at4_habits, at4_notes, at4_cfg, at4_stats)
Hosting:    Netlify (auto-deploy from GitHub main branch)
AI Tool:    GitHub Copilot (file structure, module generation, bug fixes, docs)
```

---

## ✨ Features

### 📋 Task Management
- Create, edit, delete tasks with title, description, priority, category, due date and time
- **3 Views** — List, Kanban board, Calendar
- **Smart Filters** — Category, Priority, Overdue, Starred, Today
- Sort by Date Created, Due Date, or Priority
- Task status: To Do → In Progress → Done
- Starred tasks for quick access

### 🔥 Habit Tracker
- Add habits with custom icons and daily or weekdays frequency
- Visual 7-day streak grid with streak counter
- Mark habits complete each day

### 📝 Quick Notes
- Instant note creation with grid display
- Full-text search across all notes
- Note count and quick delete

### 📊 Analytics Dashboard
- Weekly task completion bar chart
- Category breakdown donut chart
- 14-week productivity activity heatmap
- Total tasks, streaks, and focus session statistics

### ⏱️ Focus Mode — Pomodoro Timer
- 25-minute work / 5-minute break cycles
- Full-screen distraction-free mode
- 4-session cycle tracking with auto-advance

### ⚙️ Settings & Data
- Custom profile name and avatar photo upload
- Show/hide completed tasks toggle
- Export all data as JSON backup
- Import data from a previous backup
- Clear all data with confirmation

### ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+N` / `Cmd+N` | New task |
| `Ctrl+K` / `Cmd+K` | Focus search |
| `Escape` | Close modal |

---

## 🗂️ Project Structure

```
AuraTask/
├── index.html          # Main HTML structure and layout
├── css/
│   └── style.css       # Complete dark theme styling
├── js/
│   ├── app.js          # Core state, navigation, search
│   ├── tasks.js        # Task management and views
│   ├── habits.js       # Habit tracking and streaks
│   ├── notes.js        # Notes module
│   ├── analytics.js    # Charts and data visualization
│   └── settings.js     # Settings, Pomodoro, profile
├── assets/             # Static assets
└── README.md           # This file
```

---

## 🚀 Getting Started

**Requirements:** Any modern browser — Chrome, Firefox, Safari, Edge. No build tools needed.

```bash
# Clone the repository
git clone https://github.com/smrafiu/AuraTask.git
cd AuraTask

# Open directly in browser
open index.html

# Or serve locally
npx http-server
# → http://localhost:8080
```

---

## 💾 Data & Privacy

All AuraTask data lives entirely in your browser's **localStorage**:

| Key | Stores |
|---|---|
| `at4_tasks` | All task data |
| `at4_habits` | Habit records and streaks |
| `at4_notes` | Notes content |
| `at4_cfg` | User preferences |
| `at4_stats` | Focus sessions and statistics |
| `at4_name` | Profile display name |
| `at4_avatar` | Profile photo (base64) |

✅ No server · ✅ No login · ✅ No tracking · ✅ No ads · ✅ Full user control

---

## 🎨 Design System

- **Theme** — Dark mode with blue/cyan accent system
- **Typography** — Plus Jakarta Sans (headings) + Inter (body) via Google Fonts
- **Icons** — Font Awesome 6
- **Layout** — CSS Grid + Flexbox, fully responsive

| Token | Color |
|---|---|
| Primary Blue | `#3b82f6` |
| Cyan Accent | `#06b6d4` |
| Success Green | `#10b981` |
| Warning Orange | `#f59e0b` |
| Danger Red | `#ef4444` |

---

## 📦 Tech Stack

| Technology | Role |
|---|---|
| HTML5 | Semantic structure |
| CSS3 | Styling, variables, animations |
| Vanilla JavaScript | All app logic, zero dependencies |
| Font Awesome 6 | UI icons |
| Google Fonts | Typography |
| localStorage | Data persistence |
| Netlify | Hosting and deployment |
| **GitHub Copilot** | **Code generation, architecture, bug fixes** |

---

## 🎯 Future Enhancements

- [ ] Light theme toggle
- [ ] Recurring tasks
- [ ] Push notifications
- [ ] Cloud sync / account
- [ ] Mobile app (React Native)
- [ ] Collaborative workspaces
- [ ] Advanced reporting

---

## 🏆 Hackathon Submission — Microsoft Agents League @ AI Skills Fest 2026

| Field | Details |
|---|---|
| **Event** | Microsoft AI Skills Fest 2026 |
| **Hackathon** | Agents League @ AI Skills Fest |
| **Track** | Creative Apps |
| **Challenge** | Build innovative creative applications using AI-assisted development (GitHub Copilot) |
| **Required Tool** | GitHub Copilot |
| **Developer** | S.M. Rafiu |
| **Live App** | https://aurataskv1.netlify.app |
| **Repository** | https://github.com/smrafiu/AuraTask |

### Judging Criteria (as per official rules)

| Criteria | Weight | How AuraTask Addresses It |
|---|---|---|
| Accuracy & Relevance | 20% | Fully working Creative App built with GitHub Copilot |
| Reasoning & Multi-step Thinking | 20% | Modular architecture with interconnected JS modules |
| Creativity & Originality | 15% | Full productivity suite in a single no-dependency app |
| User Experience & Presentation | 15% | Polished dark UI, smooth animations, keyboard shortcuts |
| Reliability & Safety | 20% | localStorage-only, no external calls, data export/import |
| Community Vote (Discord) | 10% | — |

---

## 👨‍💻 Developer

<div align="center">

**S.M. Rafiu**
GitHub: [@smrafiu](https://github.com/smrafiu)

*Built with GitHub Copilot for Microsoft AI Skills Fest 2026 — Agents League Hackathon*

</div>

---

## 📝 License

Open source — free to use, modify, and distribute.

---

<div align="center">

**Enjoy organizing your life with AuraTask! ✨**

[Live Demo](https://aurataskv1.netlify.app) · [Repository](https://github.com/smrafiu/AuraTask) · [Hackathon](https://aka.ms/AgentsLeague/AISF)

</div>
