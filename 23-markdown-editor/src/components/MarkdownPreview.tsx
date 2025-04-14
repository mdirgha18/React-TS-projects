import React from "react";
import { marked } from "marked";

interface MarkdownPreviewProps {
  markdown: string;
}

const MarkdownPreview: React.FC<MarkdownPreviewProps> = ({ markdown }) => {
  const getMarkdownHTML = () => {
    return { __html: marked(markdown) };
  };

  return (
    <div className="preview">
      <h2>Preview</h2>
      <div dangerouslySetInnerHTML={getMarkdownHTML()} />
    </div>
  );
};

export default MarkdownPreview;
