import React, { useState, useEffect } from "react";
import "./styles.css";

const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    // Check local storage or default to false
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light";
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="theme-toggle-wrapper">
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
