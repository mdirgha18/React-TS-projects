import React, { useState } from "react";

const items = ["Apple", "Banana", "Grapes", "Orange", "Mango"];
const App: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />

      <ul>
        {filteredItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
