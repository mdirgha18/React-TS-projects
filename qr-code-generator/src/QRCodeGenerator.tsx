import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState("");

  return (
    <div style={{ textAlign: "center", padding: "2rem" }}>
      <h2>QR Code Generator</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text or URL"
        style={{
          padding: "10px",
          width: "300px",
          marginBottom: "20px",
          fontSize: "16px",
        }}
      />
      <div>
        {text ? (
          <QRCodeCanvas value={text} size={256} />
        ) : (
          <p style={{ color: "#aaa" }}>QR code will appear here</p>
        )}
      </div>
    </div>
  );
};

export default QRCodeGenerator;
