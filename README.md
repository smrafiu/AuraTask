# AuraTask - Professional Task Management Application

> Built with **GitHub Copilot** and **Claude AI** for **Microsoft AI Skills Fest 2026 - Agents League Hackathon**

## 🎯 Overview

**AuraTask** is a modern, feature-rich task management application with a beautiful dark theme and intuitive user interface. It combines productivity features including task tracking, habit monitoring, quick notes, analytics, and a Pomodoro-style focus timer.

## ✨ Features

### 📋 Task Management
- **Multiple Views**: List, Kanban board, and Calendar views
- **Smart Filtering**: Filter by category, priority, due date, and more
- **Task Status Tracking**: To Do, In Progress, Done
- **Rich Task Details**: Descriptions, due dates, times, priorities
- **Starred Tasks**: Quick access to important tasks

### 🔥 Habit Tracker
- **Daily Habit Logging**: Track habits with visual streak counter
- **Weekly Overview**: See a 7-day history of completed habits
- **Frequency Options**: Daily or weekdays-only habits

### 📝 Quick Notes
- **Fast Note Creation**: Capture ideas quickly
- **Grid Layout**: Organized note display
- **Full Text Search**: Find notes instantly

### 📊 Analytics Dashboard
- **Completion Rate**: Track overall productivity
- **Weekly Chart**: Visual completion trends
- **Category Breakdown**: Donut chart by task category
- **Activity Heatmap**: 14-week activity visualization
- **Statistics**: Total tasks, streaks, and focus sessions

### ⏱️ Focus Mode (Pomodoro Timer)
- **25/5 Timer**: Standard work/break intervals
- **Session Tracking**: Monitor completed focus sessions
- **Visual Feedback**: Full-screen distraction-free mode
- **Controls**: Play, pause, skip, and reset functions

### ⚙️ Settings & Customization
- **Profile Management**: Custom name and avatar
- **Preferences**: Toggle completed tasks visibility
- **Data Management**: Export/import data as JSON backup
- **Local Storage**: All data stored securely in browser

## 🏗️ Project Structure

```
auratask/
├── index.html          # Main HTML structure
├── css/
│   └── style.css       # Complete styling with dark theme
├── js/
│   ├── app.js          # Core initialization & utilities
│   ├── tasks.js        # Task management logic
│   ├── habits.js       # Habit tracking functionality
│   ├── notes.js        # Notes management
│   ├── analytics.js    # Analytics & charts rendering
│   └── settings.js     # Settings & state management
├── assets/             # Placeholder for future assets
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No backend or build process required

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/smrafiu/AuraTask.git
   cd AuraTask
   ```

2. Open `index.html` in your web browser or serve it locally:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. Navigate to `http://localhost:8000` in your browser

## 💾 Data Storage

All application data is stored locally in your browser's **localStorage**:
- `at4_tasks` - Task data
- `at4_habits` - Habit tracking data
- `at4_notes` - Notes
- `at4_cfg` - User preferences
- `at4_stats` - Statistics (focus sessions, streaks)
- `at4_name` - User profile name
- `at4_avatar` - User profile avatar (base64)

## 🎨 Design Highlights

### Theme
- **Dark Mode**: Eye-friendly blue and black color scheme
- **Modern Gradients**: Beautiful gradient accents throughout
- **Smooth Animations**: Polished transitions and effects
- **Responsive Design**: Works on desktop and tablet

### Color Palette
- Primary Blue: `#3b82f6`
- Cyan Accent: `#06b6d4`
- Success Green: `#10b981`
- Warning Orange: `#f59e0b`
- Danger Red: `#ef4444`

### Typography
- **Headers**: Plus Jakarta Sans (bold, modern)
- **Body**: Inter (clean, readable)

## 🎮 Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Ctrl+N` / `Cmd+N` | New task |
| `Ctrl+K` / `Cmd+K` | Focus search |
| `Escape` | Close modals |

## 📦 Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS variables and Grid/Flexbox
- **Vanilla JavaScript**: No dependencies, pure JS implementation
- **Font Awesome 6**: Icon library
- **Google Fonts**: Premium typography

## 🔧 Module Breakdown

### app.js
Core functionality including initialization, state management, and utilities

### tasks.js
Complete task management: CRUD operations, filtering, sorting, views (List/Kanban/Calendar)

### habits.js
Habit tracking with streak calculation and weekly visualization

### notes.js
Quick note management with search and deletion

### analytics.js
Data visualization: weekly charts, category breakdown, activity heatmap

### settings.js
User preferences, profile management, import/export, Pomodoro timer, focus mode

## 🚀 Deployment

This is a static web application and can be deployed to:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Any static web hosting service**

Simply upload the entire folder to your hosting provider.

## 🔐 Privacy & Security

- ✅ All data stored locally in browser
- ✅ No server communication
- ✅ No tracking or analytics
- ✅ No ads or third-party services
- ✅ Complete user control over data

## 📝 License

This project is open source. Feel free to use, modify, and distribute as needed.

## 👨‍💻 Built By

Created with **GitHub Copilot** and **Claude AI** for **Microsoft AI Skills Fest 2026 - Agents League Hackathon**

### Contributors
- **S.M. Rafiu** - Project Lead

---

## 🎯 Future Enhancements

- [ ] Dark/Light theme toggle
- [ ] Multiple workspaces
- [ ] Recurring tasks
- [ ] Task notifications
- [ ] Collaborative features
- [ ] Mobile app (React Native)
- [ ] Cloud sync
- [ ] Advanced analytics

## 📞 Support

For issues, suggestions, or contributions, please visit the [GitHub repository](https://github.com/smrafiu/AuraTask)

---

**Enjoy organizing your life with AuraTask! ✨**
