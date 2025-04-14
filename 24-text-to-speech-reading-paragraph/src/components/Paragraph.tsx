import React from "react";

interface ParagraphProps {
  paragraph: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ paragraph }) => {
  return (
    <div className="paragraph">
      <p>{paragraph}</p>
    </div>
  );
};

export default Paragraph;
