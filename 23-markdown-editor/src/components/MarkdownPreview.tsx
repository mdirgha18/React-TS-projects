// Importing React to use JSX and hooks in the component
import React from "react";
// Importing the 'marked' library for converting markdown into HTML
import { marked } from "marked";

// Defining the types for the props that the MarkdownPreview component will receive
interface MarkdownPreviewProps {
  markdown: string; // The markdown text to be rendered as HTML
}

// Defining the functional component with its props
const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  // Function to convert the markdown to HTML using the 'marked' library
  const getMarkdownHTML = () => {
    return { __html: marked(markdown) }; // Returning the HTML string to be injected into the DOM
  };

  return (
    <div className="preview"> {/* Container for the markdown preview */}
      <h2>Preview</h2> {/* Heading for the preview section */}
      {/* Using dangerouslySetInnerHTML to inject the HTML directly into the DOM */}
      <div dangerouslySetInnerHTML={getMarkdownHTML()} />
    </div>
  );
};

// Exporting the MarkdownPreview component so it can be used elsewhere
export default MarkdownPreview;
