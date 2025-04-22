import React from "react";
import TreeView from "./TreeView";

const treeData = [
  {
    label: "Root",
    children: [
      {
        label: "Child 1",
        children: [{ label: "Grandchild 1.1" }, { label: "Grandchild 1.2" }],
      },
      {
        label: "Child 2",
        children: [
          { label: "Grandchild 2.1" },
          { label: "Grandchild 2.2" },
          { label: "Grandchild 2.3" },
        ],
      },
    ],
  },
];

const App: React.FC = () => {
  return (
    <div>
      <h2>Tree View Example</h2>
      <TreeView data={treeData} />
    </div>
  );
};

export default App;
