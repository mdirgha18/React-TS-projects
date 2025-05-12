import React from "react";

// ScrollToTopAndBottom component
const ScrollToTopAndBottom: React.FC = () => {
  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0, // Scroll to the top of the page
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  // Function to scroll to the bottom of the page
  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight, // Scroll to the bottom of the page
      behavior: "smooth", // Smooth scrolling animation
    });
  };

  return (
    <div
      style={{
        position: "fixed", // Fixes the buttons at the bottom-right corner
        right: "20px", // 20px from the right
        bottom: "30px", // 30px from the bottom
        display: "flex", // Using flexbox to arrange buttons vertically
        flexDirection: "column", // Arrange buttons vertically
        gap: "10px", // Space between the buttons
      }}
    >
      {/* Button to scroll to the top */}
      <button style={buttonStyle} onClick={scrollToTop}>
        Top
      </button>

      {/* Button to scroll to the bottom */}
      <button style={buttonStyle} onClick={scrollToBottom}>
        Bottom
      </button>
    </div>
  );
};

// Styling for the buttons
const buttonStyle: React.CSSProperties = {
  padding: "10px 16px", // Padding for button size
  fontSize: "16px", // Font size for the button text
  borderRadius: "8px", // Rounded corners
  border: "none", // Remove default border
  backgroundColor: "#333", // Dark background for the button
  color: "#fff", // White text color
  cursor: "pointer", // Pointer cursor on hover
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for the button
};

export default ScrollToTopAndBottom;
