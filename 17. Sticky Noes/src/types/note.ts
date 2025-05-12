// Interface defining the structure of a sticky note
export interface StickyNoteData {
  id: string; // Unique identifier for each sticky note
  text: string; // The text content of the sticky note
  x: number; // The X-coordinate for the sticky note's position
  y: number; // The Y-coordinate for the sticky note's position
  color: string; // The background color of the sticky note
}
