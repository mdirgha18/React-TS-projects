import React from "react";

interface MarkdownEditorProps {
  markdown: string;
  onChange: (newMarkdown: string) => void;
}

const MarkdownEditor: React.FC<MarkdownEditorProps> = ({
  markdown,
  onChange,
}) => {
  return (
    <div className="editor">
      <h2>Editor</h2>
      <textarea
        value={markdown}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Write your markdown here..."
      />
    </div>
  );
};

export default MarkdownEditor;
