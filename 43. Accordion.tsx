import React, { useState } from "react";

type AccordionItemProps = {
  title: string;
  content: string;
};

const AccordionItem: React.FC<AccordionItemProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="border-b py-2">
      <button
        onClick={toggleOpen}
        className="w-full text-left font-semibold text-lg"
      >
        {title}
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{content}</p>}
    </div>
  );
};

const App: React.FC = () => {
  const items = [
    {
      title: "What is React?",
      content: "React is a JavaScript library for building user interfaces.",
    },
    {
      title: "What is TypeScript?",
      content:
        "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    },
    {
      title: "What is an Accordion?",
      content:
        "An accordion is a UI element that expands to show content when clicked.",
    },
  ];

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default App;
