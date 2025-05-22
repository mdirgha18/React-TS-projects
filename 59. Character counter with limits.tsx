
import React, { useState } from "react";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const maxChars = 100;

  // // handles input change and updates state
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  // // style for counter, turns red when near the limit
  const counterStyle: React.CSSProperties = {
    color: text.length > 90 ? "red" : "black",
    fontWeight: "bold",
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
        maxLength={maxChars}
        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
      />
      <p style={counterStyle}>
        {text.length} / {maxChars}
      </p>
    </div>
  );
};

export default App;
