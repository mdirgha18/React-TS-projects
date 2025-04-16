import React, { useEffect, useState } from "react";

const ScrollIndicator: React.FC = () => {
  const [scrollTop, setScrollTop] = useState<number>(0);

  const handleScroll = () => {
    const winScroll =
      document.documentElement.scrollTop || document.body.scrollTop;

    const height =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrolled = (winScroll / height) * 100;
    setScrollTop(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 99 }}
    >
      <div
        style={{
          height: "6px",
          width: `${scrollTop}%`,
          backgroundColor: "#4CAF50",
          transition: "width 0.25s ease-in-out",
        }}
      />
    </div>
  );
};

export default ScrollIndicator;
