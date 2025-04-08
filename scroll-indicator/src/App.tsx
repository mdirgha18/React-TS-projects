import React from "react";
import ScrollIndicator from "./ScrollIndicator";

const App: React.FC = () => {
  return (
    <div>
      <ScrollIndicator />
      <div style={{ height: "2000px", padding: "20px" }}>
        <h1>Scroll down to see the scroll indicator</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet
          facilisis urna. Praesent ultrices est vel metus elementum, vel
          eleifend arcu luctus.
        </p>
        {/* Add more content here to make the page scrollable */}
      </div>
    </div>
  );
};

export default App;
