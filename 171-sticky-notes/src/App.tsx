import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import StickyNote from "./components/StickyNote";
import { StickyNoteData } from "./types/notes";
import { randomColor } from "./utils/storage";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState<StickyNoteData[]>([]);

  const addNote = () => {
    const newNote: StickyNoteData = {
      id: uuidv4(),
      text: "",
      x: 100 + Math.random() * 200,
      y: 100 + Math.random() * 200,
      color: randomColor(),
    };
    setNotes((prev) => [...prev, newNote]);
  };

  const updateNote = (updatedNote: StickyNoteData) => {
    setNotes((prev) =>
      prev.map((note) => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <div className="app-container">
      <div className="top-bar">
        <button onClick={addNote}>Add Note</button>
      </div>
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          note={note}
          onUpdate={updateNote}
          onDelete={deleteNote}
        />
      ))}
    </div>
  );
}
