import React, { useState } from "react";

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelected(e.target.value);
  };

  return (
    <div>
      <label htmlFor="optionSelect">Choose an option:</label>
      <select id="optionSelect" value={selected} onChange={handleChange}>
        <option value="">---Select---</option>
        <option value="Colors">Colors</option>
        <option value="Countries">Countries</option>
        <option value="Fruits">Fruits</option>
      </select>
      {selected && <p>you selected: {selected}</p>}
    </div>
  );
};
