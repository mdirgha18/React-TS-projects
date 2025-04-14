import React, { useState } from "react";
import "./styles.css";
import MarkdownEditor from "./components/MarkdownEditor";
import MarkdownPreview from "./components/MarkdownPreview";

const App: React.FC = () => {
  const [markdown, setMarkdown] = useState<string>("");

  const handleMarkdownChange = (newMarkdown: string) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className="App">
      <h1>Markdown Editor</h1>
      <div className="container">
        <MarkdownEditor markdown={markdown} onChange={handleMarkdownChange} />
        <MarkdownPreview markdown={markdown} />
      </div>
    </div>
  );
};

export default App;
