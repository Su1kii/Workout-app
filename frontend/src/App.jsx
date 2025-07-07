import { useEffect, useState } from "react";
import { useWorkoutStore } from "./workouts/workout";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const { workouts, setWorkouts, createWorkout, deleteWorkout, editWorkout } =
    useWorkoutStore();

  const [form, setForm] = useState({ title: "", reps: "", load: "" });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: "", reps: "", load: "" });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      try {
        const res = await fetch("/api/workout");
        const data = await res.json();
        setWorkouts(data);
      } catch (err) {
        console.error("Error fetching workouts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchWorkouts();
  }, [setWorkouts]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createWorkout(form);
    setForm({ title: "", reps: "", load: "" });
  };

  const handleEditClick = (workout) => {
    setEditingId(workout._id);
    setEditForm({
      title: workout.title,
      reps: workout.reps,
      load: workout.load,
    });
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();
    await editWorkout(editingId, editForm);
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-10 px-4">
      <h1 className="text-4xl font-extrabold text-center text-indigo-700 mb-10 drop-shadow">
        🏋️ Workout Tracker
      </h1>

      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl space-y-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-xl font-semibold text-center text-gray-800">
          Add New Workout
        </h2>
        <input
          type="text"
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="number"
          placeholder="Reps"
          value={form.reps}
          onChange={(e) => setForm({ ...form, reps: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <input
          type="number"
          placeholder="Load (kg)"
          value={form.load}
          onChange={(e) => setForm({ ...form, load: e.target.value })}
          className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required
        />
        <button className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
          Create Workout
        </button>
      </motion.form>

      <div className="mt-12 max-w-2xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center text-gray-800">
          📋 My Workouts
        </h2>
        {loading ? (
          <p className="text-center text-blue-500">Loading...</p>
        ) : workouts.length === 0 ? (
          <p className="text-center text-gray-500">No workouts found.</p>
        ) : (
          <AnimatePresence>
            {workouts.map((workout) => (
              <motion.div
                key={workout._id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white p-4 rounded-xl shadow hover:shadow-lg border transition"
              >
                {editingId === workout._id ? (
                  <form onSubmit={handleEditSubmit} className="space-y-2">
                    <input
                      type="text"
                      value={editForm.title}
                      onChange={(e) =>
                        setEditForm({ ...editForm, title: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="number"
                      value={editForm.reps}
                      onChange={(e) =>
                        setEditForm({ ...editForm, reps: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                    />
                    <input
                      type="number"
                      value={editForm.load}
                      onChange={(e) =>
                        setEditForm({ ...editForm, load: e.target.value })
                      }
                      className="w-full p-2 border rounded"
                    />
                    <div className="flex gap-2">
                      <button
                        type="submit"
                        className="bg-green-500 text-white px-4 py-1 rounded hover:bg-green-600 transition"
                      >
                        Save
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="bg-gray-400 text-white px-4 py-1 rounded hover:bg-gray-500 transition"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                ) : (
                  <>
                    <h3 className="text-lg font-semibold">{workout.title}</h3>
                    <p className="text-sm text-gray-600">
                      Reps: {workout.reps}
                    </p>
                    <p className="text-sm text-gray-600 mb-2">
                      Load: {workout.load} kg
                    </p>
                    <div className="flex gap-2">
                      <button
                        onClick={() => handleEditClick(workout)}
                        className="bg-yellow-500 text-white px-4 py-1 rounded hover:bg-yellow-600 transition"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteWorkout(workout._id)}
                        className="bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                      >
                        Delete
                      </button>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        )}
      </div>
    </div>
  );
}

export default App;
