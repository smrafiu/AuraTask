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

## 🎬 Demo Video

Watch AuraTask in action:

[![Watch Demo](https://img.shields.io/badge/▶️_Watch_on_Vimeo-1198297651-1ab7ea?style=for-the-badge&logo=vimeo)](https://vimeo.com/1198297651?share=copy&fl=sv&fe=ci)

**Demo showcases:**
- ✅ Task creation with priority, category, due date
- ✅ Multiple views: List, Kanban board, Calendar
- ✅ Habit tracking with 7-day streak visualization
- ✅ Analytics dashboard with charts and heatmap
- ✅ Focus Mode: Pomodoro timer (25-min work / 5-min break)
- ✅ Settings: Profile, data export/import, preferences
- ✅ Full-text search across tasks, notes, habits

---

## 🤖 How GitHub Copilot Built AuraTask

This entire project was developed using **GitHub Copilot** (Claude Haiku 4.5 on free plan) at [github.com/copilot](https://github.com/copilot) — from structuring the project to fixing real bugs across multiple files.

### The Build Process

**Phase 1 — Design & Prototype**  
A complete single-file HTML prototype was created with all UI, logic, and styling using Claude AI. This became the foundation handed to GitHub Copilot.

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
| Mobile sidebar footer invisible | `flex` overflow hiding footer | Added `min-height:0` and `flex-shrink:0` to nav-scroll |
| Typing name triggered photo upload | `onclick` on entire profile card | Moved handler to avatar circle only, added `stopPropagation()` |
| Search bar not filtering | `doSearch()` not wired to all views | Reconnected function to search tasks, notes, and habits |
| List/Kanban/Calendar tabs had side gaps | `width:fit-content` on tab container | Changed to `width:100%` with `flex:1` on individual tabs |
| Analytics chart overflowed into text | No height cap on bar elements | Capped bar height at `100px`, added `overflow:hidden` to chart-card |
| Clear All Data button looked unstyled | Missing danger button CSS | Redesigned with red gradient matching app UI |
| Settings profile spacing uneven | `align-items:flex-start` misalignment | Fixed with `center` alignment and `min-width:0` on flex children |

**Phase 4 — Deployment**  
The final project was connected to **Netlify** from this GitHub repository and deployed in minutes with zero configuration.

### Why GitHub Copilot Accelerated Development

| Without GitHub Copilot | With GitHub Copilot |
|---|---|
| Manually splitting 1,200+ lines by hand | Clean file structure generated in 2 minutes |
| Writing repetitive module boilerplate | Instant scaffolding with correct imports and exports |
| Debugging across files alone in isolation | AI-assisted bug detection across all modules |
| Hours of project setup and configuration | Production-ready architecture immediately |
| Writing documentation from scratch | README generated with full project context |

**Result:** What would take 20+ hours of traditional development completed in 4 hours with GitHub Copilot.

---

## 🏗️ Architecture

```
AuraTask — Browser-based Task Manager
│
├── index.html                 ← Entry point, HTML structure, modal shells
│
├── css/
│   └── style.css              ← Dark theme, CSS variables, animations, responsive design
│
└── js/
    ├── app.js                 ← State management, navigation, global search
    ├── tasks.js               ← Task CRUD, List/Kanban/Calendar views, filters
    ├── habits.js              ← Habit tracking, logging, 7-day streak visualization
    ├── notes.js               ← Notes create/delete, full-text search
    ├── analytics.js           ← Bar chart, donut chart, 14-week heatmap
    └── settings.js            ← Profile, Pomodoro timer, export/import

Data Layer:    Browser localStorage (no backend, no server)
Hosting:       Netlify (auto-deploy from GitHub main branch)
AI Tool Used:  GitHub Copilot (code generation, bug fixes, documentation)
```

---

## ✨ Features

### 📋 Task Management
- Create, edit, delete tasks with title, description, priority, category, due date/time
- **3 Views** — List, Kanban board, Calendar
- **Smart Filters** — Category, Priority, Overdue, Starred, Today
- Sort by Date Created, Due Date, or Priority
- Task status workflow: To Do → In Progress → Done
- Starred tasks for quick access and favorites

### 🔥 Habit Tracker
- Add habits with custom icons and frequency (daily / weekdays)
- Visual 7-day streak grid with streak counter
- Mark habits complete each day and watch streaks grow
- Habit history and frequency tracking

### 📝 Quick Notes
- Instant note creation with grid layout display
- Full-text search across all notes
- Note count badge and quick delete
- Single-click access to create and organize thoughts

### 📊 Analytics Dashboard
- Weekly task completion bar chart (7-day view)
- Category breakdown donut chart
- 14-week productivity activity heatmap
- Total tasks completed, current streaks, focus session statistics
- Real-time data refresh

### ⏱️ Focus Mode — Pomodoro Timer
- 25-minute focused work / 5-minute break cycles
- Full-screen distraction-free mode
- Session tracking (4 sessions per full cycle)
- Auto-advance between work and break phases
- Session history and productivity metrics

### ⚙️ Settings & Data Management
- Custom profile name and avatar photo upload
- Show/hide completed tasks toggle
- Export all data as JSON backup (download)
- Import data from previous backup file
- Clear all data with safety confirmation
- Preference persistence across sessions

### ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl+N` or `Cmd+N` | Create new task |
| `Ctrl+K` or `Cmd+K` | Focus search bar |
| `Escape` | Close open modal |

---

## 🗂️ Project Structure

```
AuraTask/
├── index.html              # Main HTML structure and layout
├── css/
│   └── style.css           # Complete dark theme with animations
├── js/
│   ├── app.js              # Core state, boot sequence, navigation
│   ├── tasks.js            # Task management and view logic
│   ├── habits.js           # Habit tracking and streak calculation
│   ├── notes.js            # Notes module and search
│   ├── analytics.js        # Data visualization and charts
│   └── settings.js         # Settings, Pomodoro, profile management
├── assets/                 # Static assets (icons, images)
└── README.md               # This file
```

---

## 🚀 Getting Started

**Requirements:** Any modern browser — Chrome, Firefox, Safari, Edge. No build tools, dependencies, or server needed.

```bash
# Clone the repository
git clone https://github.com/smrafiu/AuraTask.git
cd AuraTask

# Option 1: Open directly in browser
open index.html

# Option 2: Serve locally (requires Node.js)
npx http-server
# → Visit http://localhost:8080
```

**That's it!** AuraTask is ready to use immediately.

---

## 💾 Data Storage & Privacy

All AuraTask data lives entirely in your **browser's localStorage** — meaning:

✅ **No server** — data never leaves your device  
✅ **No login required** — instant access  
✅ **No tracking** — complete privacy  
✅ **No ads** — distraction-free experience  
✅ **Full control** — you can export, import, or clear anytime  

### Data Keys

| Key | Stores | Size |
|---|---|---|
| `at4_tasks` | All task records | ~1-5 MB |
| `at4_habits` | Habit data and streaks | ~100 KB |
| `at4_notes` | Notes content | ~500 KB |
| `at4_cfg` | User preferences and settings | ~10 KB |
| `at4_stats` | Focus sessions and statistics | ~50 KB |
| `at4_name` | Profile display name | ~1 KB |
| `at4_avatar` | Profile photo (base64 encoded) | ~50 KB |

---

## 🎨 Design System

- **Theme** — Modern dark mode with blue/cyan accent colors
- **Typography** — Plus Jakarta Sans (headings) + Inter (body) from Google Fonts
- **Icons** — Font Awesome 6 Pro
- **Layout** — CSS Grid + Flexbox, fully responsive (mobile-first)
- **Animations** — Smooth transitions and micro-interactions

### Color Palette

| Token | Color | Usage |
|---|---|---|
| Primary Blue | `#3b82f6` | Primary buttons, links |
| Cyan Accent | `#06b6d4` | Highlights, active states |
| Success Green | `#10b981` | Completed tasks, streaks |
| Warning Orange | `#f59e0b` | Warnings, overdue tasks |
| Danger Red | `#ef4444` | Delete, clear operations |
| Dark BG | `#0a0e1a` | Main background |

---

## 📦 Tech Stack

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic structure and layout |
| **CSS3** | Styling, variables, animations, responsive design |
| **Vanilla JavaScript** | All app logic (zero external dependencies) |
| **Font Awesome 6** | 1,500+ UI icons |
| **Google Fonts** | Typography (Plus Jakarta Sans, Inter) |
| **localStorage API** | Client-side data persistence |
| **Netlify** | Static hosting and CI/CD deployment |
| **GitHub Copilot** | Code generation, architecture, bug fixes |

---

## 🎯 Future Enhancements

- [ ] Light theme toggle
- [ ] Recurring tasks and habits
- [ ] Browser push notifications
- [ ] Cloud sync with optional login
- [ ] Collaborative workspaces
- [ ] Mobile app (React Native / Flutter)
- [ ] Advanced reporting and insights
- [ ] Integration with calendar apps
- [ ] Team task management

---

## 🏆 Hackathon Submission Details

**Microsoft Agents League @ AI Skills Fest 2026 — Creative Apps Track**

| Field | Details |
|---|---|
| **Event** | Microsoft AI Skills Fest 2026 |
| **Hackathon** | Agents League @ AI Skills Fest |
| **Track** | Creative Apps |
| **Challenge** | Build innovative applications with AI-assisted development using GitHub Copilot |
| **Required Tool** | GitHub Copilot (✅ Used throughout) |
| **Developer** | S.M. Rafiu |
| **GitHub** | [@smrafiu](https://github.com/smrafiu) |
| **Live App** | [aurataskv1.netlify.app](https://aurataskv1.netlify.app) |
| **Repository** | [github.com/smrafiu/AuraTask](https://github.com/smrafiu/AuraTask) |
| **Demo Video** | [vimeo.com/1198297651](https://vimeo.com/1198297651?share=copy&fl=sv&fe=ci) |
| **Submission Date** | June 5, 2026 |
| **Deadline** | June 14, 2026 at 11:59 PM Pacific Time |

### Judging Criteria Alignment

| Criteria | Weight | How AuraTask Excels |
|---|---|---|
| **Accuracy & Relevance** | 20% | ✅ Fully working Creative App built entirely with GitHub Copilot |
| **Reasoning & Multi-step Thinking** | 20% | ✅ Modular architecture with interconnected JS modules solving complex state management |
| **Creativity & Originality** | 15% | ✅ Complete productivity suite (task, habit, notes, analytics, focus) in single no-dependency app |
| **User Experience & Presentation** | 15% | ✅ Polished dark UI, smooth animations, keyboard shortcuts, responsive design |
| **Reliability & Safety** | 20% | ✅ localStorage-only (no external calls), data export/import, comprehensive error handling |
| **Community Vote (Discord)** | 10% | — |

---

## 🙏 Credits

**Built by:** S.M. Rafiu  
**AI Assistant:** GitHub Copilot (Claude Haiku 4.5)  
**Design Inspiration:** Modern productivity apps and design systems  
**Fonts:** Google Fonts (Inter, Plus Jakarta Sans)  
**Icons:** Font Awesome 6  
**Hosting:** Netlify  

---

## 📝 License

MIT License — Open source and free to use, modify, and distribute.

```
MIT License

Copyright (c) 2026 S.M. Rafiu

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

<div align="center">

## Ready to Organize Your Day?

[🚀 **Start Using AuraTask**](https://aurataskv1.netlify.app) · [📹 **Watch Demo**](https://vimeo.com/1198297651?share=copy&fl=sv&fe=ci) · [📂 **GitHub**](https://github.com/smrafiu/AuraTask)

---

**Enjoy organizing your life with AuraTask! ✨**

*Built with GitHub Copilot for Microsoft AI Skills Fest 2026 — Agents League Hackathon*

</div>
