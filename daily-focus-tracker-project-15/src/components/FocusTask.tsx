import React, { useState, useEffect } from "react";
import { FocusTaskData } from "../types/focus";
import { loadTask, saveTask } from "../utils/storage";

const getToday = () => new Date().toISOString().split("T")[0];

const motivationalQuotes = [
  "Stay focused and never give up.",
  "One task at a time.",
  "You’ve got this!",
  "Progress, not perfection.",
];

export default function FocusTask() {
  const [task, setTask] = useState<FocusTaskData>({
    date: getToday(),
    task: "",
    completed: false,
  });

  const [input, setInput] = useState("");
  const [quote] = useState(
    () =>
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
  );

  useEffect(() => {
    const saved = loadTask();
    if (saved && saved.date === getToday()) {
      setTask(saved);
    }
  }, []);

  const handleSubmit = () => {
    if (!input.trim()) return;
    const newTask = { date: getToday(), task: input, completed: false };
    setTask(newTask);
    saveTask(newTask);
    setInput("");
  };

  const toggleComplete = () => {
    const updated = { ...task, completed: !task.completed };
    setTask(updated);
    saveTask(updated);
  };

  if (!task.task) {
    return (
      <div>
        <p className="mb-2">What's your main focus today?</p>
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

  return (
    <div>
      <p className="mb-1 text-sm text-gray-600">Today's focus:</p>
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
