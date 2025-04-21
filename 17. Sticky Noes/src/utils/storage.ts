import { StickyNoteData } from "../types/note";

const STORAGE_KEY = "sticky-notes";

export const saveNotes = (notes: StickyNoteData[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

export const loadNotes = (): StickyNoteData[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export function randomColor(): string {
  const colors = ["#FFEB3B", "#FFCDD2", "#C8E6C9", "#BBDEFB", "#E1BEE7"];
  return colors[Math.floor(Math.random() * colors.length)];
}
