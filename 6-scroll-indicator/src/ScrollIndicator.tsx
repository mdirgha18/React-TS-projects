import React, { useEffect, useState } from "react";

const ScrollIndicator: React.FC = () => {
  // State to track the scroll position as a percentage
  const [scrollTop, setScrollTop] = useState<number>(0);

  // Event handler to update the scroll position percentage
  const handleScroll = () => {
    // Get the current scroll position from the top of the page
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    // Get the total height of the document minus the visible area (viewport height)
    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    // Calculate the scroll percentage
    const scrolled = (winScroll / height) * 100;

    // Update the state with the new scroll percentage
    setScrollTop(scrolled);
  };

  // Effect hook to add the scroll event listener on component mount
  useEffect(() => {
    // Add scroll event listener to track scroll position
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed", // Keep the indicator fixed at the top of the page
        top: 0, // Position at the very top
        left: 0, // Align to the left
        width: "100%", // Full width across the screen
        zIndex: 99, // Ensure it's above other content
      }}
    >
      <div
        style={{
          height: "6px", // Set the height of the scroll indicator bar
          width: `${scrollTop}%`, // Set the width based on scroll position
          backgroundColor: "#4CAF50", // Set the color of the scroll indicator
          transition: "width 0.25s ease-in-out", // Smooth transition for width change
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
