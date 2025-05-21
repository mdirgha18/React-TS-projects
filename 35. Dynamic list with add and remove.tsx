import React, { useState } from "react";

const App: React.FC = () => {
  const [items, setItems] = useState<String[]>([]);
  const [newItem, setNewItem] = useState<String>("");

  const handleClick = () => {
    if (newItem.trim() !== "") {
      setItems([...items, newItem]);
      setNewItem("");
    }
  };

  const handleRemove = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Dynamic Layout</h2>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
        placeholder="Add an item"
      />

      <button onClick={handleClick}>Add</button>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => handleRemove(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
