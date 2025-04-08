import React, { useState } from "react";

type AccordionItem = {
  title: string;
  content: string | React.ReactNode;
};

type AccordionProps = {
  items: AccordionItem[];
};

export default function Accordion({ items }: AccordionProps): JSX.Element {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
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
