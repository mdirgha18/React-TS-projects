import { StickyNoteData } from "../types/notes";

const STORAGE_KEY = "sticky-notes";

export const saveNotes = (notes: StickyNoteData[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(notes));
};

export const loadNodes = (): StickyNoteData[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export function randomColor(): string {
  const hue = Math.floor(Math.random() * 360); // 0 to 359
  const saturation = 70 + Math.random() * 30; // 70% to 100%
  const lightness = 70 + Math.random() * 10; // 70% to 80%
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}
