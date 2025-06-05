import React, { useState, ChangeEvent } from "react";
import Result from "./Result";
import "./styles.css";

const App: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  const [secret] = useState<number>(Math.floor(Math.random() * 20) + 1);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTerm(e.target.value);
  };

  return (
    <div className="container">
      <div className="head">
        <label htmlFor="term">Guess the number between 1 and 20</label>
      </div>
      <input
        id="term"
        type="text"
        name="term"
        value={term}
        onChange={handleChange}
        placeholder="Enter your guess"
      />
      <Result term={term} secretNum={secret} />
    </div>
  );
};

export default App;
