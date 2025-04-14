import React from "react";

interface NoteListProps {
  notes: string[];
  onDelete: (index: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      <h2>Saved Notes</h2>
      <ul>
        {notes.map((note, index) => (
          <li key={index}>
            <p>{note}</p>
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
