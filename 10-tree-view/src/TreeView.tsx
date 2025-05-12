import React, { useState } from "react";
import "./styles.css";

// Define the shape of a tree node
type TreeNode = {
  label: string;             // The label displayed for the node
  children?: TreeNode[];     // Optional array of child nodes
};

// Define the props expected by the TreeView component
type TreeViewProps = {
  data: TreeNode[];          // An array of root-level tree nodes
};

// Recursive component to render a single tree item (node)
const TreeItem: React.FC<{ node: TreeNode }> = ({ node }) => {
  const [expanded, setExpanded] = useState(false); // State to toggle expansion
  const hasChildren = node.children && node.children.length > 0; // Check if node has children

  return (
    <div className="tree-node">
      {/* Node label; toggles expansion if it has children */}
      <div
        className="tree-label"
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {/* Arrow icon indicates expandable/collapsible state */}
        {hasChildren && <span className="arrow">{expanded ? "▼" : "▶"}</span>}
        {node.label}
      </div>

      {/* If expanded and has children, recursively render child nodes */}
      {expanded && hasChildren && (
        <div className="tree-children">
          {node.children!.map((child, idx) => (
            <TreeItem key={idx} node={child} /> // Recursively render each child
          ))}
        </div>
      )}
    </div>
  );
};

// TreeView component renders the root level of the tree structure
const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className="tree-view">
      {/* Map through root-level nodes and render each one */}
      {data.map((node, idx) => (
        <TreeItem key={idx} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
