import React from "react";
import TreeView from "./TreeView"; // Import the TreeView component

// Sample hierarchical tree data to pass to the TreeView component
const treeData = [
  {
    label: "Root", // Top-level node
    children: [
      {
        label: "Child 1", // First child of Root
        children: [
          { label: "Grandchild 1.1" }, // First grandchild under Child 1
          { label: "Grandchild 1.2" }, // Second grandchild under Child 1
        ],
      },
      {
        label: "Child 2", // Second child of Root
        children: [
          { label: "Grandchild 2.1" },
          { label: "Grandchild 2.2" },
          { label: "Grandchild 2.3" },
        ],
      },
    ],
  },
];

// App component that renders the TreeView with the treeData
const App: React.FC = () => {
  return (
    <div>
      <h2>Tree View Example</h2>
      {/* Render the TreeView component with the hierarchical data */}
      <TreeView data={treeData} />
    </div>
  );
};

export default App;
