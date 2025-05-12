import React, { ReactNode } from "react";

// Define the props type: expects children React nodes
type Props = { children: ReactNode };

// A wrapper component that provides a styled area for screenshots or overlays
export default function ScreenshotArea({ children }: Props) {
  return (
    <div
      id="screenshot-area" // ID can be used to capture this area as a screenshot using libraries like html2canvas
      style={{
        position: "relative",         // Allows absolutely positioned children (e.g., overlays)
        width: "100%",                // Takes full width of parent
        height: "500px",              // Fixed height for the screenshot area
        border: "1px solid #ccc",     // Light border for visual boundary
        backgroundColor: "#f5f5f5",   // Light gray background
      }}
    >
      {children} {/* Render any children inside the screenshot area */}
    </div>
  );
}
