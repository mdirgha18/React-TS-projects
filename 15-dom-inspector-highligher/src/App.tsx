import React from "react";
import InspectorOverlay from "./InspectorOverlay";
import "./styles.css";

export default function App() {
  return (
    <div>
      <h1>DOM Inspector</h1>
      <p>Hover any element on this page to inspect it. </p>
      <div className="sample-box">Sample Box 1</div>
      <div className="sample-box">Sample Box 2</div>
      <button className="sample-btn">Click Me</button>

      <InspectorOverlay />
    </div>
  );
}
