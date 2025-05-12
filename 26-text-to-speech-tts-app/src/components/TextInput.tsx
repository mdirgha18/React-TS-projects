import React from "react";

// Interface for the TextInput component props
interface TextInputProps {
  text: string; // The current text value
  setText: (text: string) => void; // Function to update the text value
}

const TextInput: React.FC<TextInputProps> = ({ text, setText }) => {
  return (
    <div className="text-input"> {/* Wrapper div for the text input */}
      <textarea
        value={text} // The current value of the text (controlled)
        onChange={(e) => setText(e.target.value)} // Update the text value when the user types
        placeholder="Type something to hear it aloud..." // Placeholder text when no input is given
      ></textarea>
    </div>
  );
};

export default TextInput;
