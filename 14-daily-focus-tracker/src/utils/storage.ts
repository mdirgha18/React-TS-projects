import { FocusTaskData } from "../types/focus";

// Define the key used to store the task data in localStorage
const STORAGE_KEY = "daily-focus-task";

// Function to save a task to localStorage
export const saveTask = (task: FocusTaskData) => {
  // Convert the task object to a JSON string and save it under the STORAGE_KEY
  localStorage.setItem(STORAGE_KEY, JSON.stringify(task));
};

// Function to load the task from localStorage
export const loadTask = (): FocusTaskData | null => {
  // Retrieve the task data from localStorage
  const data = localStorage.getItem(STORAGE_KEY);
  // If the data exists, parse it as a JSON object; otherwise, return null
  return data ? JSON.parse(data) : null;
};
