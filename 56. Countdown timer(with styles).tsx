import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  // initial countdown value
  const initialTime = 10;

  // state to track remaining time and timer status
  const [timeLeft, setTimeLeft] = useState<number>(initialTime);
  const [isRunning, setIsRunning] = useState<Boolean>(false);

  // useEffect to handle the countdown logic
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    }
    if (timeLeft === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(timer);
  }, [isRunning, timeLeft]);

  // start and reset handlers
  const startCountdown = () => {
    if (timeLeft > 0) {
      setIsRunning(true);
    }
  };

  const resetCountdown = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  // styling for the dark mode

  const containerStyle: React.CSSProperties = {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#121212",
    color: "#ffffff",
    fontFamily: "monospace",
  };

  const timeStyle: React.CSSProperties = {
    fontSize: "4rem",
    marginBottom: "20px",
  };

  const buttonStyle: React.CSSProperties = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "1rem",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#1f1f1f",
    color: "#ffffff",
  };

  return (
    <div style={containerStyle}>
      <div style={timeStyle}>{timeLeft}</div>
      <div>
        <button onClick={startCountdown} style={buttonStyle}>
          Start
        </button>
        <button onClick={resetCountdown} style={buttonStyle}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
