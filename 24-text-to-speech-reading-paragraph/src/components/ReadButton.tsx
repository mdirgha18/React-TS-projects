// Importing React to use JSX and hooks in the component
import React from "react";

// Defining the types for the props that the ReadButton component will receive
interface ReadButtonProps {
  onClick: () => void; // The function to be executed when the button is clicked
}

// Defining the functional component with its props
const ReadButton: React.FC<ReadButtonProps> = ({ onClick }) => {
  return (
    <div className="read-button"> {/* Wrapper div for the button */}
      {/* The button element which triggers the onClick function when clicked */}
      <button onClick={onClick}>Read Paragraph Aloud</button>
    </div>
  );
};

// Exporting the ReadButton component to be used elsewhere in the application
export default ReadButton;
