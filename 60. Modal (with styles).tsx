
// Open-Close Modal/ ui improved
import React, { useState } from "react";

const App: React.FC = () => {
  // Track whether the modal is open
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <button
        onClick={openModal}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Open Modal
      </button>

      {isOpen && (
        // Overlay background
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 1000,
          }}
        >
          {/* Modal box */}
          <div
            style={{
              backgroundColor: "#fff",
              padding: "24px",
              borderRadius: "8px",
              boxShadow: "0 2px 10px rgba(0,0,0,0.2)",
              width: "300px",
              position: "relative",
            }}
          >
            <h2 style={{ marginTop: 0 }}>This is a modal</h2>
            <p>You can put any content here.</p>
            <button
              onClick={closeModal}
              style={{
                marginTop: "16px",
                padding: "8px 16px",
                cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
