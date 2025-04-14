import React from "react";

// Button component to trigger the speech synthesis
interface ReadButtonProps {
  onClick: () => void;
}

const ReadButton: React.FC<ReadButtonProps> = ({ onClick }) => {
  return (
    <div className="read-button">
      <button onClick={onClick}>Read Paragraph Aloud</button>
    </div>
  );
};

export default ReadButton;
