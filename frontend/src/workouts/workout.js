import { create } from "zustand";

export const useWorkoutStore = create((set) => ({
  workouts: [],
  setWorkouts: (workouts) => set({ workouts }),

  createWorkout: async (newWorkout) => {
    try {
      const response = await fetch("/api/workout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newWorkout),
      });
      const data = await response.json();
      set((state) => ({
        workouts: [...state.workouts, data],
      }));
    } catch (error) {
      console.error("Error creating workout:", error);
    }
  },

  deleteWorkout: async (id) => {
    try {
      const res = await fetch(`/api/workout/${id}`, {
        method: "DELETE",
      });
      if (res.ok) {
        set((state) => ({
          workouts: state.workouts.filter((w) => w._id !== id),
        }));
      }
    } catch (err) {
      console.error("Error deleting workout:", err);
    }
  },

  editWorkout: async (id, updatedWorkout) => {
    try {
      const res = await fetch(`/api/workout/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedWorkout),
      });
      const data = await res.json();
      if (res.ok) {
        set((state) => ({
          workouts: state.workouts.map((w) => (w._id === id ? data : w)),
        }));
      }
    } catch (err) {
      console.error("Error editing workout:", err);
    }
  },
}));
