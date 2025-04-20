import { FocusTaskData } from "../types/focus";

const STORAGE_KEY = "daily-focus-task";

export const saveTask = (task: FocusTaskData) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(task));
};

export const loadTask = (): FocusTaskData | null => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : null;
};
