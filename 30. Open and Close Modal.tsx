import React, { useState } from "react";

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div>
          <div>This is a modal</div>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
};
export default App;
