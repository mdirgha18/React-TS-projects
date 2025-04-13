import React, { useState } from "react";
import ScreenshotArea from "./components/ScreenshotArea";
import Toolbar from "./components/Toolbar";
import CanvasOverlay from "./components/CanvasOverlay";
import "./styles.css";

function App() {
  const [tool, setTool] = useState<"select" | "rect" | "text">("select");

  return (
    <div>
      <Toolbar selectedTool={tool} onSelectTool={setTool} />
      <ScreenshotArea>
        <CanvasOverlay tool={tool} />
      </ScreenshotArea>

      <Toolbar
        selectedTool={tool}
        onSelectTool={(newTool) => {
          console.log("Selected Tool:", newTool);
          setTool(newTool);
        }}
      />
    </div>
  );
}

export default App;
