import React, { useState } from "react";
import "./styles.css";

const App: React.FC = () => {
  const [text, setText] = useState<string>("");
  const MAX_LENGTH = 100;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const isTooLong = text.length > MAX_LENGTH;
  const isEmpty = text.trim() === "";

  return (
    <div className="dark-mode">
      <input
        type="text"
        value={text}
        onChange={handleChange}
        placeholder="Type something..."
      />
      <button disabled={isTooLong || isEmpty}>Submit</button>
      <p>
        Characters: {text.length} / {MAX_LENGTH}
      </p>
      {isTooLong && <p style={{ color: "red" }}>Too Long!</p>}
    </div>
  );
};

export default App;
