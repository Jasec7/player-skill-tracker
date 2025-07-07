# ⚽ Player Skill Tracker
🌐 Live App: https://player-skill-tracker.netlify.app
🌐 Live API: https://player-skill-tracker-backend.onrender.com

A React single-page application that allows users to browse a list of soccer players, view their details, and track performance notes through scouting feedback.

---

## 🚀 Overview
Player Skill Tracker helps scouts and coaches keep track of players and their performance. Users can navigate between players, add feedback notes, and remove outdated comments — all in a clean, dynamic interface.

The app includes:
- A player directory
- Player details pages
- A notes system tied to individual players
- Smooth navigation with React Router
- A fun animated soccer ball logo on the homepage

---

## 🏆 Features
- View all players and their details  
- Add performance notes (POST request to JSON server)  
- Delete performance notes (DELETE request)  
- 3 client-side routes using React Router:
- `/` — Home
- `/players` — Player list
- `/players/:id/notes` — Player-specific notes  
- Animated soccer ball logo (spins & bounces)  
- Responsive design with basic styling

---

## 🛠 Technologies Used
- React
- React Router
- JSON Server (backend)
- CSS
- Git & GitHub for version control

---

## 📦 Getting Started

### Backend Setup
1. Clone the backend repo:
```
git clone git@github.com:Jasec7/player-skill-tracker-backend.git
cd player-skill-tracker-backend
npm install
npm run server
```
---

### Frontend Setup
1. Clone the frontend repo:
```
git clone git@github.com:Jasec7/player-skill-tracker.git
cd player-skill-tracker
```
2. Install dependencies and start React:
```
npm install
npm start
```
Runs app at `http://localhost:3000`.