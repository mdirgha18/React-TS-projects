type Props = {
  selectedTool: string;
  onSelectTool: (tool: "select" | "rect" | "text") => void;
};

export default function Toolbar({ selectedTool, onSelectTool }: Props) {
  return (
    <div className="toolbar">
      <button onClick={() => onSelectTool("rect")}>Draw Rectangle</button>
      <button onClick={() => onSelectTool("text")}>Add Text</button>
      <button onClick={() => onSelectTool("select")}>Select</button>
    </div>
  );
}
