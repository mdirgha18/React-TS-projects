import React, { ReactNode, useRef } from "react";

type Props = { children: ReactNode };

export default function ScreenshotArea({ children }: Props) {
  return (
    <div
      id="screenshot-area"
      style={{
        position: "relative",
        width: "100%",
        height: "500px",
        border: "1px solid #ccc",
        backgroundColor: "#f5f5f5",
      }}
    >
      {children}
    </div>
  );
}
