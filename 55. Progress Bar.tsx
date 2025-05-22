import React, { useState } from "react";

const App: React.FC = () => {
  const [progress, setProgress] = useState<number>(0);

  const handleIncrease = () => {
    setProgress((prev) => (prev < 100 ? prev + 10 : 100));
  };

  const handleReset = () => {
    setProgress(0);
  };

  const containerStyle: React.CSSProperties = {
    height: "100vh",
    backgroundColor: "#121212",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "sans-serif",
    padding: "20px",
  };

  const barContainerStyle: React.CSSProperties = {
    width: "80%",
    height: "30px",
    backgroundColor: "#333",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "20px",
  };

  const barFillStyle: React.CSSProperties = {
    height: "100%",
    width: `${progress}%`,
    backgroundColor: "#4caf50",
    transition: "width 0.3s ease",
  };

  const buttonStyle: React.CSSProperties = {
    padding: "10px 20px",
    margin: "5px",
    backgroundColor: "#444",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  };

  const labelStyle: React.CSSProperties = {
    marginBottom: "10px",
    fontSize: "24px",
  };

  return (
    <div style={containerStyle}>
      <div style={labelStyle}>Progress: {progress}%</div>
      <div style={barContainerStyle}>
        <div style={barFillStyle}></div>
      </div>
      <div>
        <button
          onClick={handleIncrease}
          disabled={progress >= 100}
          style={buttonStyle}
        >
          Increase
        </button>
        <button onClick={handleReset} style={buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
