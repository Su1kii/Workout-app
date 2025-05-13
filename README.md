# 🏋️ Workout Tracker API (Backend Only)

This is the backend for a full-stack workout tracking application. It's built using **Node.js**, **Express**, and **MongoDB**, and provides full CRUD (Create, Read, Update, Delete) functionality for managing workouts.

> ⚠️ **Note**: This is a **work in progress**. The backend is mostly functional, but the frontend has not been built yet.

---

## 🚀 Features

- Create a new workout
- Retrieve all workouts
- Retrieve a single workout by ID
- Update an existing workout
- Delete a workout

---

## 🛠️ Tech Stack

- **Node.js**
- **Express**
- **MongoDB** (via **Mongoose**)
- **REST API**

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

yaml
Copy
Edit

---

## 📬 API Routes

| Method | Route                | Description            |
|--------|----------------------|------------------------|
| GET    | `/api/workouts`      | Get all workouts       |
| GET    | `/api/workouts/:id`  | Get a workout by ID    |
| POST   | `/api/workouts`      | Create a new workout   |
| PATCH  | `/api/workouts/:id`  | Update a workout       |
| DELETE | `/api/workouts/:id`  | Delete a workout       |

---

## 🧰 Scripts

| Command         | Description                          |
|-----------------|--------------------------------------|
| `npm run dev`   | Runs the server using **nodemon**    |
| `npm start`     | Runs the server normally             |

---

## 📌 Current Status

- ✅ Backend functionality is mostly complete
- 🚧 Frontend is **not yet developed**
- 🐞 May still have bugs or edge cases to fix

---

## 🎯 Learning Goals

This project was created to practice:

- REST API development
- MongoDB and Mongoose integration
- CRUD operations with Express
- Managing environment variables with `.env`

---

## 📍 Future Improvements

- Build a frontend using **Next.js**
- Add user authentication and authorization
- Improve input validation and error handling
- Deploy the full-stack app to **Render**, **Vercel**, or **Railway**

---
