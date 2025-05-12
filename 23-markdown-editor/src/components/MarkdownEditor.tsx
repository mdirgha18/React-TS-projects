// Importing React to use JSX and hooks in the component
import React from "react";

// Defining the types for the props that the MarkdownEditor component will receive
interface MarkdownEditorProps {
  markdown: string; // The current markdown text
  onChange: (newMarkdown: string) => void; // A function to handle updates to the markdown
}

// Defining the functional component with its props
const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  markdown,  // Destructuring the markdown string from props
  onChange,  // Destructuring the onChange function from props
}) => {
  return (
    <div className="editor"> {/* Container for the editor */}
      <h2>Editor</h2> {/* Heading for the editor */}
      {/* The textarea element for the user to input markdown */}
      <textarea
        value={markdown} // The value of the textarea is controlled by the markdown prop
        onChange={(e) => onChange(e.target.value)} // Update markdown state when the user types
        placeholder="Write your markdown here..." // Placeholder text in the textarea
      />
    </div>
  );
};

// Exporting the MarkdownEditor component so it can be used elsewhere
export default MarkdownEditor;
