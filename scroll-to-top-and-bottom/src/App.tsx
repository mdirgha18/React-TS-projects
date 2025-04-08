import React from "react";
import ScrollToTopAndBottom from "./ScrollToTopAndBottom";

const App: React.FC = () => {
  return (
    <div>
      <ScrollToTopAndBottom />
      <div style={{ padding: "20px" }}>
        <h1>Scroll to Top & Bottom Demo</h1>
        <div style={{ height: "2000px" }}>
          <p>Scroll down to try the buttons!</p>
        </div>
      </div>
    </div>
  );
};

export default App;
