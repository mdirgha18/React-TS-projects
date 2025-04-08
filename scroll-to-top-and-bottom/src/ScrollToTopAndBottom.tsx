import React from "react";

const ScrollToTopAndBottom: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <button style={buttonStyle} onClick={scrollToTop}>
        ⬆️ Top
      </button>
      <button style={buttonStyle} onClick={scrollToBottom}>
        ⬇️ Bottom
      </button>
    </div>
  );
};

const buttonStyle: React.CSSProperties = {
  padding: "10px 16px",
  fontSize: "16px",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#333",
  color: "#fff",
  cursor: "pointer",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
};

export default ScrollToTopAndBottom;
