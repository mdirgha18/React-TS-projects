import React from "react";
import Accordion from "./Accordion";

function App() {
  const items = [
    {
      title: "What is React?",
      content: "React is a javascript library for building UIs",
    },
    {
      title: "Why use typescript with React?",
      content: "typescript helps you catch errors early through static typing",
    },
    {
      title: "Is this accordion reusable?",
      content: "Absolutely! You can use it anywhere in your app",
    },
  ];

  return (
    <div style={{ width: "500px", margin: "50px auto" }}>
      <h1>Accordion Example</h1>
      <Accordion items={items} />
    </div>
  );
}

export default App;
