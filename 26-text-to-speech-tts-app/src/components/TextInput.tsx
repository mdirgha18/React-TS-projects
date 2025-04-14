import React from "react";

interface TextInputProps {
  text: string;
  setText: (text: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ text, setText }) => {
  return (
    <div className="text-input">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something to hear it aloud..."
      ></textarea>
    </div>
  );
};

export default TextInput;
