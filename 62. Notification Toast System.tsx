
import React, { useState, useEffect } from "react";

type ToastType = "success" | "error" | "info";

const buttonStyles: Record<ToastType, React.CSSProperties> = {
  success: {
    backgroundColor: "#22c55e",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
  },
  error: {
    backgroundColor: "#ef4444",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
  },
  info: {
    backgroundColor: "#3b82f6",
    color: "white",
    padding: "10px 16px",
    border: "none",
    borderRadius: "6px",
    marginRight: "10px",
    cursor: "pointer",
  },
};

const App: React.FC = () => {
  const [showToast, setShowToast] = useState<Boolean>(false);
  const [toastType, setToastType] = useState<ToastType>("info");

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (showToast) {
      timer = setTimeout(() => setShowToast(false), 3000);
    }
    return () => clearTimeout(timer);
  }, [showToast]);

  const getToastStyle = (): React.CSSProperties => {
    const base: React.CSSProperties = {
      position: "fixed",
      top: "20px",
      right: "20px",
      padding: "12px 20px",
      color: "white",
      borderRadius: "8px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    };

    const bgColor = {
      success: "#22c55e",
      error: "#ef4444",
      info: "#3b82f6",
    };
    return { ...base, backgroundColor: bgColor[toastType] };
  };
  return (
    <div style={{ padding: "30px" }}>
      <h1
        style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "16px" }}
      >
        Notification Toast Example
      </h1>
      <div>
        <button
          style={buttonStyles.success}
          onClick={() => handleShow("success")}
        >
          Show Success
        </button>
        <button style={buttonStyles.error} onClick={() => handleShow("error")}>
          Show Error
        </button>
        <button style={buttonStyles.info} onClick={() => handleShow("info")}>
          Show Info
        </button>
      </div>
      {showToast && (
        <div style={getToastStyle()}>This is a {toastType} Notification!</div>
      )}
    </div>
  );

  // show toast handler
  function handleShow(type: ToastType) {
    setToastType(type);
    setShowToast(type);
  }
};
export default App;
