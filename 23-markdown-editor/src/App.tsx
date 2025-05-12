// Importing necessary dependencies from React and components
import React, { useState } from "react"; 
import "./styles.css"; // Importing CSS for styling
import MarkdownEditor from "./components/MarkdownEditor"; // Importing the MarkdownEditor component
import MarkdownPreview from "./components/MarkdownPreview"; // Importing the MarkdownPreview component

// Main functional component for the application
const App: React.FC = () => {
  // Defining state to hold the markdown content
  const [markdown, setMarkdown] = useState<string>("");

  // Handler function to update the markdown state whenever the user types in the editor
  const handleMarkdownChange = (newMarkdown: string) => {
    setMarkdown(newMarkdown); // Update the markdown state with the new input
  };

  return (
    <div className="App"> {/* Main container for the app */}
      <h1>Markdown Editor</h1> {/* Heading for the app */}
      <div className="container"> {/* Container for the editor and preview sections */}
        {/* Rendering the MarkdownEditor component and passing the current markdown and change handler */}
        <MarkdownEditor markdown={markdown} onChange={handleMarkdownChange} />
        {/* Rendering the MarkdownPreview component to display the HTML preview of the markdown */}
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
};

// Exporting the App component to be used in the root of the application
export default App;
