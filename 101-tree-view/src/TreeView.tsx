import React, { useState } from "react";
import "./styles.css"; // Import styles for the tree view components

// Define the structure for each node in the tree
type TreeNode = {
  label: string;             // Text to display for the node
  children?: TreeNode[];     // Optional children for nested structure
};

// Props type for the TreeView component
type TreeViewProps = {
  data: TreeNode[];          // Array of top-level tree nodes
};

// Component to render a single tree node, possibly with children
const TreeItem: React.FC<{ node: TreeNode }> = ({ node }) => {
  const [expanded, setExpanded] = useState(false); // State to track if node is expanded

  // Determine if the node has children
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="tree-node">
      {/* Render the label and optional expand/collapse arrow */}
      <div
        className="tree-label"
        onClick={() => hasChildren && setExpanded(!expanded)} // Toggle on click if children exist
      >
        {/* Show arrow only if node has children */}
        {hasChildren && <span className="arrow">{expanded ? "▼" : "►"}</span>}
        {node.label}
      </div>

      {/* If node is expanded and has children, recursively render them */}
      {expanded && hasChildren && (
        <div className="tree-children">
          {node.children!.map((child, idx) => (
            <TreeItem key={idx} node={child} /> // Render each child node recursively
          ))}
        </div>
      )}
    </div>
  );
};

// Main TreeView component renders the tree's top-level nodes
const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className="tree-view">
      {/* Map through each root node and render a TreeItem */}
      {data.map((node, idx) => (
        <TreeItem key={idx} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
