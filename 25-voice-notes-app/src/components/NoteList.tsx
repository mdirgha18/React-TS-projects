// Importing React to use JSX and hooks in the component
import React from "react";

// Defining the types for the props that the NoteList component will receive
interface NoteListProps {
  notes: string[]; // Array of notes to display
  onDelete: (index: number) => void; // Function to delete a note, taking the note's index as an argument
}

// Defining the functional component with its props
const NoteList: React.FC<NoteListProps> = ({ notes, onDelete }) => {
  return (
    <div>
      <h2>Saved Notes</h2> {/* Heading for the note list section */}
      <ul>
        {/* Iterating through each note and displaying it in a list */}
        {notes.map((note, index) => (
          <li key={index}> {/* Each list item has a unique key */}
            <p>{note}</p> {/* Displaying the note text */}
            {/* Button to delete the note, calling onDelete with the index */}
            <button onClick={() => onDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

// Exporting the NoteList component to be used elsewhere in the application
export default NoteList;
