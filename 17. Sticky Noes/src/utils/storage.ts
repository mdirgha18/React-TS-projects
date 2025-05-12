// Sticky Notes utility functions for saving, loading, and generating random colors

// The key used to store sticky notes in localStorage
const STORAGE_KEY = "sticky-notes";

// Function to save an array of sticky notes to localStorage
export const saveNotes = (notes: StickyNoteData[]) => {
  // Convert the notes array to a string and store it under STORAGE_KEY
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

// Function to load sticky notes from localStorage
export const loadNotes = (): StickyNoteData[] => {
  // Retrieve the notes from localStorage by the key STORAGE_KEY
  const data = localStorage.getItem(STORAGE_KEY);
  
  // If data exists, parse and return it, otherwise return an empty array
  return data ? JSON.parse(data) : [];
};

// Function to generate a random color from a predefined set
export function randomColor(): string {
  // Array of possible sticky note background colors
  const colors = ["#FFEB3B", "#FFCDD2", "#C8E6C9", "#BBDEFB", "#E1BEE7"];
  
  // Randomly select a color from the array and return it
  return colors[Math.floor(Math.random() * colors.length)];
}
