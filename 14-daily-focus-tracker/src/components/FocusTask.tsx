import React, { useState, useEffect } from "react";
import { FocusTaskData } from "../types/focus";
import { loadTask, saveTask } from "../utils/storage";

// Helper function to get the current date in YYYY-MM-DD format
const getToday = () => new Date().toISOString().split("T")[0];

// Array of motivational quotes to display
const motivationalQuotes = [
  "Stay focused and never give up.",
  "One task at a time.",
  "You’ve got this!",
  "Progress, not perfection.",
];

export default function FocusTask() {
  // State for the task data: date, task description, and completion status
  const [task, setTask] = useState<FocusTaskData>({
    date: getToday(),
    task: "",
    completed: false,
  });
  // State for user input in the task input field
  const [input, setInput] = useState("");
  // State for the randomly selected motivational quote
  const [quote] = useState(
    () =>
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  );

  // Load saved task from local storage if the task matches today's date
  useEffect(() => {
    const saved = loadTask();
    if (saved && saved.date === getToday()) {
      setTask(saved);
    }
  }, []);

  // Handle task submission: set the task if there's input
  const handleSubmit = () => {
    if (!input.trim()) return; // Prevent empty tasks
    const newTask = { date: getToday(), task: input, completed: false };
    setTask(newTask);
    saveTask(newTask); // Save the new task to local storage
    setInput(""); // Clear the input field
  };

  // Toggle the completion status of the task
  const toggleComplete = () => {
    const updated = { ...task, completed: !task.completed };
    setTask(updated);
    saveTask(updated); // Save updated task
  };

  // If no task is set, show an input field to allow the user to set a task
  if (!task.task) {
    return (
      <div>
        <p className="mb-2">What is your main focus today?</p>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter task..."
        />
        <button onClick={handleSubmit}>Set Focus</button>
      </div>
    );
  }

  // Once a task is set, display the task with a checkbox for completion and a motivational quote
  return (
    <div>
      <p className="mb-1 text-sm text-gray-600">Today's Focus</p>
      <label style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={toggleComplete}
        />
        <span
          style={{ textDecoration: task.completed ? "line-through" : "none" }}
        >
          {task.task}
        </span>
      </label>
      <p style={{ marginTop: "1rem", fontStyle: "italic", color: "#888" }}>
        {quote}
      </p>
    </div>
  );
}
