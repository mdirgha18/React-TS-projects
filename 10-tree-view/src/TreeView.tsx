import React, { useState } from "react";
import "./styles.css";

type TreeNode = {
  label: string;
  children?: TreeNode[];
};

type TreeViewProps = {
  data: TreeNode[];
};

const TreeItem: React.FC<{ node: TreeNode }> = ({ node }) => {
  const [expanded, setExpanded] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div className="tree-node">
      <div
        className="tree-label"
        onClick={() => hasChildren && setExpanded(!expanded)}
      >
        {hasChildren && <span className="arrow">{expanded ? "▼" : "▶"}</span>}
        {node.label}
      </div>
      {expanded && hasChildren && (
        <div className="tree-children">
          {node.children!.map((child, idx) => (
            <TreeItem key={idx} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

const TreeView: React.FC<TreeViewProps> = ({ data }) => {
  return (
    <div className="tree-view">
      {data.map((node, idx) => (
        <TreeItem key={idx} node={node} />
      ))}
    </div>
  );
};

export default TreeView;
