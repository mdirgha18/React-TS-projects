import React, { useEffect, useState } from "react";

// Define the shape of the data for the tooltip (tag, id, class)
type ElementInfo = {
  tag: string;
  id: string;
  className: string;
};

export default function InspectorOverlay() {
  // State to manage the tooltip's CSS style (position and visibility)
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  
  // State to store the information about the element being hovered
  const [tooltipInfo, setTooltipInfo] = useState<ElementInfo | null>(null);

  useEffect(() => {
    // Handler for mouse move events
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // If the target element is the tooltip itself, do nothing
      if (!target || target.id === "overlay-info") return;

      // Get the bounding rectangle of the hovered element
      const rect = target.getBoundingClientRect();

      // Set the tooltip content with the element's tag, ID, and class
      setTooltipInfo({
        tag: target.tagName,
        id: target.id || "(none)", // If no ID, show "(none)"
        className: target.className || "(none)", // If no class, show "(none)"
      });

      // Position the tooltip just below the element and make it visible
      setTooltipStyle({
        top: rect.top + window.scrollY + rect.height + 10, // Position below the element (10px offset)
        left: rect.left + window.scrollX, // Horizontal position aligned with the element
        display: "block", // Show the tooltip
      });
    };

    // Attach the mousemove event listener to the document
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup: Remove the event listener when the component is unmounted
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Only render the tooltip if there's info available */}
      {tooltipInfo && (
        <div className="tooltip" style={tooltipStyle}>
          <p>
            <strong>Tag:</strong> {tooltipInfo.tag}
          </p>
          <p>
            <strong>ID:</strong> {tooltipInfo.id}
          </p>
          <p>
            <strong>Class:</strong> {tooltipInfo.className}
          </p>
        </div>
      )}
    </>
  );
}
