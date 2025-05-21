import React, { useState, useEffect } from "react";
import "./styles.css";

type Quote = {
  text: string;
  author: string;
};

const App: React.FC = () => {
  const quotes = [
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Do not watch the clock. Do what it does. Keep going.",
    "Believe you can and you're halfway there.",
  ];

  const [currentQuote, setCurrentQuote] = useState<string>(quotes[0]);

  const generateQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);

    // while (quotes[randomIndex] === currentQuote && quotes.length > 1) {
    //   randomIndex = Math.floor(Math.random() * quotes.length);
    // }

    setCurrentQuote(quotes[randomIndex]);
  };

  return (
    <div className="dark-mode">
      <h2>Random Quote Generator</h2>
      <p>{currentQuote}</p>
      <button onClick={generateQuote}>New Quote</button>
    </div>
  );
};

export default App;
