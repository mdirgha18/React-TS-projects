import React, { useState } from "react";

const App: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const longText =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam...";

  const handleClick = () => {
    isExpanded(e.target.value);
  };
  return (
    <div>
      <button onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? "Read Less" : "Read More"}
      </button>
      <p>{isExpanded ? longText : longText.slice(0, 100) + "..."}</p>
    </div>
  );
};
export default App;
