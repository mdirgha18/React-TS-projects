type Tool = "select" | "rect" | "text";

type Props = {
  selectedTool: Tool;
  onSelectTool: (tool: Tool) => void;
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
