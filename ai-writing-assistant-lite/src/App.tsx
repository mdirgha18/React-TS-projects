import { useState } from "react";
import Editor from "./components/Editor";
import Preview from "./components/Preview";
import SmartTips from "./components/SmartTips";
import { useAutoSave } from "./hooks/useAutoSave";
import "./styles.css";

function App() {
  const [text, setText] = useState("");

  useAutoSave("draft", text);

  return (
    <div className="app-container">
      <h1>📝 AI Writing Assistant Lite</h1>
      <SmartTips />
      <div className="editor-preview">
        <Editor value={text} onChange={setText} />
        <Preview markdown={text} />
      </div>
    </div>
  );
}

export default App;
