import React, { useRef } from "react";
import { StickyNoteData } from "../types/note";

// Props type definition
type Props = {
  note: StickyNoteData; // Sticky note data (position, color, text)
  onUpdate: (note: StickyNoteData) => void; // Callback to update the note
  onDelete: (id: string) => void; // Callback to delete the note
};

export default function StickyNote({ note, onUpdate, onDelete }: Props) {
  // Ref to access the sticky note DOM element
  const noteRef = useRef<HTMLDivElement>(null);
  
  // Temporary offset to help with note dragging
  let offset = { x: 0, y: 0 };

  // Handle mouse down event for dragging the sticky note
  const handleMouseDown = (e: React.MouseEvent) => {
    const el = noteRef.current; // Get the current sticky note element
    if (!el) return;

    // Calculate the initial offset for dragging
    const shiftX = e.clientX - el.getBoundingClientRect().left;
    const shiftY = e.clientY - el.getBoundingClientRect().top;

    // Function to move the sticky note while dragging
    const moveAt = (pageX: number, pageY: number) => {
      onUpdate({ ...note, x: pageX - shiftX, y: pageY - shiftY });
    };

    // Set up mouse move event to update note's position
    const onMouseMove = (e: MouseEvent) => moveAt(e.pageX, e.pageY);
    document.addEventListener("mousemove", onMouseMove);

    // Remove mouse move event and reset on mouse up
    document.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.onmouseup = null;
    };
  };

  return (
    <div
      ref={noteRef} // Attach the ref to the sticky note element
      onMouseDown={handleMouseDown} // Start dragging when mouse down on sticky note
      style={{
        position: "absolute", // Absolute positioning to allow movement
        left: note.x, // X-coordinate of the note
        top: note.y, // Y-coordinate of the note
        width: 200, // Fixed width for sticky note
        padding: 10, // Padding inside the sticky note
        backgroundColor: note.color, // Background color of the sticky note
        boxShadow: "2px 2px 10px rgba(0,0,0,0.2)", // Shadow for 3D effect
        cursor: "move", // Cursor changes to indicate that the note can be moved
      }}
    >
      {/* Textarea to display and edit the sticky note text */}
      <textarea
        value={note.text} // Display the note text
        onChange={(e) => onUpdate({ ...note, text: e.target.value })} // Update text on change
        style={{
          width: "100%", // Full width inside the sticky note
          height: "100px", // Fixed height for the textarea
          background: "transparent", // Transparent background
          border: "none", // No border for the textarea
          resize: "none", // Disable resizing of the textarea
        }}
      />
      {/* Button to delete the sticky note */}
      <button onClick={() => onDelete(note.id)} style={{ marginTop: 5 }}>
        Delete
      </button>
    </div>
  );
}
