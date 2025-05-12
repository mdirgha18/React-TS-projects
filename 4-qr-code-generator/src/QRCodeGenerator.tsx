import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator: React.FC = () => {
  // State to hold the input text which will be converted into a QR code
  const [text, setText] = useState("");

  // Function to handle downloading the QR code as an image
  const downloadQR = () => {
    const canvas = document.querySelector("canvas"); // Get the canvas element
    if (canvas) {
      const url = canvas.toDataURL(); // Convert canvas to data URL (base64)
      const a = document.createElement("a"); // Create a download anchor
      a.href = url;
      a.download = "qr-code.png"; // Set the file name
      a.click(); // Trigger the download
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>QR Code Generator</h2>

      {/* Label for accessibility */}
      <label htmlFor="qr-input" style={{ display: "block", marginBottom: "10px" }}>
        Enter text or URL
      </label>

      {/* Input field for user to type text or URL */}
      <input
        id="qr-input"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)} // Update state on input change
        placeholder="Enter text or URL"
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />

      {/* QR code display or placeholder text */}
      <div>
        {text ? (
          <>
            {/* Render QR code when there's input */}
            <QRCodeCanvas value={text} size={256} />
            <div style={{ marginTop: "10px" }}>
              {/* Button to download the QR code as an image */}
              <button
                onClick={downloadQR}
                style={{
                  marginTop: "10px",
                  padding: "10px 20px",
                  fontSize: "16px",
                  backgroundColor: "#4caf50",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Download QR Code
              </button>
            </div>
          </>
        ) : (
          // Show this message when input is empty
          <p style={{ color: "#aaa" }}>QR Code will appear here</p>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
