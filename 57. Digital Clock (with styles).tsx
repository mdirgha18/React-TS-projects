
import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  // state to store the current time string
  const [time, setTime] = useState<string>(new Date().toLocaleDateString());

  const [date] = useState<string>(
    new Date().toLocaleDateString([], {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  );

  // Update the time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(timer);
  }, []);

  // styles for the dark mode

  const containerStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#121212",
    color: "#ffffff",
    fontFamily: "monospace",
    fontSize: "3rem",
    letterSpacing: "2px",
  };

  const headingStyle: React.CSSProperties = {
    marginBottom: "10px",
    fontSize: "1.5rem",
    color: "#bbbbbb",
  };

  const dateStyle: React.CSSProperties = {
    marginTop: "10px",
    fontSize: "1.2rem",
    color: "#cccccc",
  };

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>Current Time</div>
      <div>{time}</div>
      <div style={dateStyle}>{date}</div>
    </div>
  );
};

export default App;
