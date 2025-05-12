import React, { useState, useEffect } from "react";
import "./styles.css";

const ThemeToggle: React.FC = () => {
  // Initialize state for theme based on localStorage value or default to light mode
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark"; // Check localStorage for saved theme
  });

  // Effect hook to apply the theme change to the document body and update localStorage
  useEffect(() => {
    document.body.className = isDarkMode ? "dark" : "light"; // Apply the corresponding class to the body
    localStorage.setItem("theme", isDarkMode ? "dark" : "light"); // Save the selected theme in localStorage
  }, [isDarkMode]); // Run this effect whenever isDarkMode state changes

  // Toggle between dark and light mode
  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev); // Flip the value of isDarkMode
  };

  return (
    <div className="theme-toggle-wrapper">
      <h2>{isDarkMode ? "Dark Mode" : "Light Mode"}</h2>
      {/* Button to switch themes */}
      <button onClick={toggleTheme}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>
    </div>
  );
};

export default ThemeToggle;
