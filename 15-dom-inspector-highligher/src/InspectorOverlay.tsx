import React, { useEffect, useState } from "react";

type ElementInfo = {
  tag: string;
  id: string;
  className: string;
};

export default function InspectorOverlay() {
  const [tooltipStyle, setTooltipStyle] = useState<React.CSSProperties>({});
  const [tooltipInfo, setTooltipInfo] = useState<ElementInfo | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target || target.id === "overlay-info") return;

      const rect = target.getBoundingClientRect();

      // set tooltip information
      setTooltipInfo({
        tag: target.tagName,
        id: target.id || "(none)",
        className: target.className || "(none)",
      });

      // set tooltip position and make it visible
      setTooltipStyle({
        top: rect.top + window.scrollY + rect.height + 10, //10 px below the element
        left: rect.left + window.scrollX,
        display: "block",
      });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
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
