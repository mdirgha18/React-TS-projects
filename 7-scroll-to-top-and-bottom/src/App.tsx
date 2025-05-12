import React from "react";
import ScrollToTopAndBottom from "./ScrollToTopAndBottom"; // Import the ScrollToTopAndBottom component

const App: React.FC = () => {
  return (
    <div>
      {/* ScrollToTopAndBottom component renders the scroll buttons */}
      <ScrollToTopAndBottom />
      <div style={{ padding: "20px" }}>
        <h1>Scroll to Top and Bottom Demo</h1>
        {/* A div with height of 2000px to create a scrollable area */}
        <div style={{ height: "2000px" }}>
          <p>Scroll down to try the buttons!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
