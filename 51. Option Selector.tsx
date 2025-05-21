import React, { useState } from "react";

const App: React.FC = () => {
  const [color, setColor] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setColor(e.target.value);
  };
  return (
    <div>
      <label htmlFor="colorSelect">Choose a color:</label>
      <select id="colorSelect" value={color} onChange={handleChange}>
        <option value="">---Select---</option>
        <option value="Red">Red</option>
        <option value="Green">Green</option>
        <option value="Blue">Blue</option>
      </select>

      {color && <p>You selected: {color}</p>}
    </div>
  );
};

export default App;
