import React, { useState, useEffect } from "react";

type ColorType = "hex" | "rgb";

const RandomColorGenerator: React.FC = () => {
  const [colorType, setColorType] = useState<ColorType>("hex");
  const [color, setColor] = useState<string>("#000000");

  const getRandomInt = (max: number): number => {
    return Math.floor(Math.random() * max);
  };

  const generateHexColor = (): string => {
    const hexValues = "0123456789ABCDEF";
    let hex = "#";
    for (let i = 0; i < 6; i++) {
      hex += hexValues[getRandomInt(16)];
    }
    return hex;
  };

  const generateRgbColor = (): string => {
    const r = getRandomInt(256);
    const g = getRandomInt(256);
    const b = getRandomInt(256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const generateColor = () => {
    const newColor =
      colorType === "hex" ? generateHexColor() : generateRgbColor();
    setColor(newColor);
  };

  useEffect(() => {
    generateColor();
  }, [colorType]);

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: color,
        color: "#fff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "20px",
      }}
    >
      <h1>{colorType === "hex" ? "HEX Color" : "RGB Color"}</h1>
      <h2>{color}</h2>

      <div>
        <button
          onClick={() => setColorType("hex")}
          style={{ marginRight: "10px" }}
        >
          HEX
        </button>
        <button onClick={() => setColorType("rgb")}>RGB</button>
      </div>

      <button onClick={generateColor} style={{ marginTop: "10px" }}>
        Generate Random Color
      </button>
    </div>
  );
};

export default RandomColorGenerator;
