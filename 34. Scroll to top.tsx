import React, { useState, useEffect } from "react";

const App: React.FC = () => {
  const [showButton, setShowButton] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle: React.CSSProperties = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px 15px",
    fontSize: "16px",
    borderRadius: "5px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  };
  return (
    <div style={{ height: "2000px", padding: "20px" }}>
      <h1>Scroll down to see the "Scroll to Top" button</h1>
      {showButton && (
        <button onClick={scrollToTop} style={buttonStyle}>
          Top
        </button>
      )}
    </div>
  );
};

export default App;
