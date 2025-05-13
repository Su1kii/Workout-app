const express = require("express");
const {
  createWorkout,
  getWorkouts,
  getWorkout,
  updateWorkout,
  deleteWorkout,
} = require("../controllers/workoutController");

const router = express.Router();

// GET ALL WORKOUTS
router.get("/", getWorkouts);

// GET A SINGLE WORKOUT
router.get("/:id", getWorkout);

// POST a new workout
router.post("/", createWorkout);

// DELETE a workout
router.delete("/:id", deleteWorkout);
// UPDATE a workout
router.patch("/:id", updateWorkout);

module.exports = router;
