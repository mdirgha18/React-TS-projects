import React, { useState } from "react";

const App: React.FC = () => {
  // Define the tabs array with label and content
  const tabs = [
    { label: "Home", content: "Welcome to the homepage!" },
    { label: "Profile", content: "This is your profile." },
    { label: "Settings", content: "Adjust your preferences here." },
  ];

  // Track the active tab index
  const [activeTab, setActiveTab] = useState<number>(0);

  return (
    <div
      style={{ width: "400px", margin: "50px auto", fontFamily: "sans-serif" }}
    >
      {/* Tab buttons */}
      <div style={{ display: "flex", marginBottom: "12px" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            style={{
              flex: 1,
              padding: "10px",
              cursor: "pointer",
              border: "1px solid #ccc",
              backgroundColor: activeTab === index ? "#007bff" : "#f0f0f0",
              color: activeTab === index ? "white" : "black",
              fontWeight: activeTab === index ? "bold" : "normal",
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Active tab content */}
      <div
        style={{
          padding: "16px",
          border: "1px solid #ccc",
          backgroundColor: "#fafafa",
        }}
      >
        {tabs[activeTab].content}
      </div>
    </div>
  );
};

export default App;
