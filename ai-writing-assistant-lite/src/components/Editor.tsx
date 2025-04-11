type EditorProps = {
  value: string;
  onChange: (val: string) => void;
};

export default function Editor({ value, onChange }: EditorProps) {
  return (
    <textarea
      className="editor"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Start writing in markdown..."
    />
  );
}
