import React, { useState } from "react";

// Define the shape of each accordion item
type AccordionItem = {
  title: string; // The title displayed for the accordion header
  content: string | React.ReactNode; // The content shown when the item is expanded
};

// Define the props expected by the Accordion component
type AccordionProps = {
  items: AccordionItem[]; // An array of accordion items
};

// Functional component definition
export default function Accordion({ items }: AccordionProps): JSX.Element {
  // State to keep track of the currently active (open) accordion item
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Toggle the accordion item; close if already open, open if closed
  const toggleItem = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="Accordion">
      {/* Loop through each item and render its title and content */}
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          {/* Accordion title/header with click handler */}
          <div
            className="accordion-title"
            onClick={() => toggleItem(index)}
            style={{
              cursor: "pointer",
              padding: "12px",
              background: "#eee",
              borderBottom: "1px solid #ccc",
              fontWeight: "bold",
            }}
          >
            {item.title}
          </div>

          {/* Render content only if the item is active (i.e., opened) */}
          {activeIndex === index && (
            <div
              className="accordion-content"
              style={{
                padding: "12px",
                background: "#fafafa",
                borderBottom: "1px solid #ccc",
              }}
            >
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
