# 🏋️ Workout Tracker API (Backend Only)

This is the backend for a full-stack workout tracking app. It’s built with **Node.js**, **Express**, and **MongoDB**, and supports basic CRUD functionality (Create, Read, Update, Delete) for managing workout entries.

> ⚠️ Note: This is a **work in progress**. The frontend has not been built yet, but the backend is mostly functional.

---

## 🚀 Features

- Create a new workout
- Get all workouts
- Get a single workout by ID
- Update a workout
- Delete a workout

---

## 🛠️ Tech Stack

- Node.js
- Express
- MongoDB + Mongoose
- REST API

---

## 📁 Project Structure

workout-api/
│
├── controllers/ # Handles logic for each route
├── models/ # Mongoose schemas
├── routes/ # API endpoints
├── .env # Environment variables (not committed)
├── server.js # Main server file
└── package.json # Project metadata and scripts

📬 API Routes
Method	Route	Description
GET	/api/workouts	Get all workouts
GET	/api/workouts/:id	Get a workout by ID
POST	/api/workouts	Create a new workout
PATCH	/api/workouts/:id	Update a workout
DELETE	/api/workouts/:id	Delete a workout

🧰 Scripts
npm run dev: Runs server with nodemon

npm start: Runs server normally (without nodemon)

📌 Current Status
✅ Backend functionality is mostly complete

🚧 Frontend is not yet developed

🐞 May still have bugs or edge cases to fix

🎯 Learning Goals
This app was built to learn:

REST API development

MongoDB and Mongoose integration

CRUD operations with Express

Environment configuration with .env

📍 Future Improvements
Build a full frontend using Next.js

Add user authentication

Improve error handling and validation

Deploy full-stack version to Vercel or Render

