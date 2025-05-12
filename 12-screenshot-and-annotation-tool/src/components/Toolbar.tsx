// Define allowed tool types
type Tool = "select" | "rect" | "text";

// Props for the Toolbar component
type Props = {
  selectedTool: Tool; // Currently selected tool
  onSelectTool: (tool: Tool) => void; // Callback to update selected tool
};

// A simple toolbar for switching between annotation tools
export default function Toolbar({ selectedTool, onSelectTool }: Props) {
  return (
    <div className="toolbar">
      {/* Button to activate rectangle drawing tool */}
      <button onClick={() => onSelectTool("rect")}>Draw Rectangle</button>

      {/* Button to activate text annotation tool */}
      <button onClick={() => onSelectTool("text")}>Add Text</button>

      {/* Button to activate selection tool */}
      <button onClick={() => onSelectTool("select")}>Select</button>
    </div>
  );
}
