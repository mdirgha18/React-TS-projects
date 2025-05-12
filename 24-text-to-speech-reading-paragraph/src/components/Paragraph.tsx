// Importing React to use JSX and hooks in the component
import React from "react";

// Defining the types for the props that the Paragraph component will receive
interface ParagraphProps {
  paragraph: string; // The text content to be displayed inside the paragraph
}

// Defining the functional component with its props
const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  return (
    <div className="paragraph"> {/* Wrapper div for the paragraph */}
      <p>{paragraph}</p> {/* Rendering the paragraph text inside <p> tag */}
    </div>
  );
};

// Exporting the Paragraph component to be used elsewhere in the application
export default Paragraph;
