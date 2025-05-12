// Importing necessary dependencies from React
import React, { useState } from "react";
import "./styles.css"; // Importing the CSS file for styling

// Defining the Task interface with three properties: id, text, and completed
interface Task {
  id: number;
  text: string;
  completed: boolean;
}

const App: React.FC = () => {
  // useState hooks for managing the state of tasks and input
  const [tasks, setTasks] = useState<Task[]>([]); // Tasks state stores an array of tasks
  const [input, setInput] = useState(""); // Input state stores the value of the input field

  // Function to handle the addition of a new task
  const addTask = (e: React.FormEvent) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (!input.trim()) return; // If input is empty or whitespace, return without adding task

    // Create a new task object with a unique id, text, and initial 'completed' state as false
    const newTask: Task = {
      id: Date.now(), // Using current timestamp as a unique id
      text: input.trim(), // Trimming any extra spaces from the input text
      completed: false, // Setting the initial state of 'completed' to false
    };

    // Update the tasks state by adding the new task
    setTasks([...tasks, newTask]);

    // Clear the input field after task is added
    setInput("");
  };

  // Function to toggle the 'completed' state of a task when clicked
  const toggleTask = (id: number) => {
    // Map through the current tasks and toggle the 'completed' state for the selected task
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task based on its id
  const deleteTask = (id: number) => {
    // Filter the tasks to remove the task with the given id
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  // JSX rendering the component's UI
  return (
    <div className="container">
      <h1>Task Manager</h1>
      {/* Form to add a new task */}
      <form onSubmit={addTask}>
        <input
          type="text" // Input field for typing new task
          value={input} // Controlled input, bound to the input state
          onChange={(e) => setInput(e.target.value)} // Update the input state on change
          placeholder="Add a new task..." // Placeholder text when the input is empty
        />
        <button type="submit">Add</button> {/* Button to submit the form */}
      </form>

      {/* List of tasks */}
      <ul>
        {/* Map over the tasks array and render each task */}
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            {/* Display task text */}
            <span>{task.text}</span>
            <div>
              {/* Button to toggle completion status of the task */}
              <button onClick={() => toggleTask(task.id)}>
                {task.completed ? "Undo" : "Done"} {/* Text changes based on task completion status */}
              </button>
              {/* Button to delete the task */}
              <button onClick={() => deleteTask(task.id)}>🗑</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App; // Exporting the App component
