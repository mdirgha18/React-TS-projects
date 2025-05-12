import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Importing uuid to generate unique ids for each sticky note
import StickyNote from "./components/StickyNote"; // Import StickyNote component
import { StickyNoteData } from "./types/notes"; // Import the StickyNoteData type
import { randomColor } from "./utils/storage"; // Import the randomColor function to assign random colors

// Main app component
export default function App() {
  // State to hold the list of sticky notes
  const [notes, setNotes] = useState<StickyNoteData[]>([]);

  // Function to add a new sticky note
  const addNote = () => {
    const newNote: StickyNoteData = {
      id: uuidv4(), // Generate a unique id for the note
      text: "", // Default text is empty
      x: 100 + Math.random() * 200, // Random position on the x-axis
      y: 100 + Math.random() * 200, // Random position on the y-axis
      color: randomColor(), // Assign a random color using the randomColor function
    };
    // Add the new note to the state
    setNotes((prev) => [...prev, newNote]);
  };

  // Function to update a specific sticky note
  const updateNote = (updatedNote: StickyNoteData) => {
    // Update the note in the state if the id matches
    setNotes((prev) =>
      prev.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  // Function to delete a sticky note
  const deleteNote = (id: string) => {
    // Filter out the note with the matching id from the state
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div>
      {/* Button to add a new sticky note */}
      <button onClick={addNote}>Add Note</button>
      
      {/* Map through all the sticky notes and render each one */}
      {notes.map((note) => (
        <StickyNote
          key={note.id} // Use the note id as the key for efficient rendering
          note={note} // Pass the note object to the StickyNote component
          onUpdate={updateNote} // Function to update the note
          onDelete={deleteNote} // Function to delete the note
        />
      ))}
    </div>
  );
}
