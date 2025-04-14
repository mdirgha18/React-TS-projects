import React from "react";

type Props = {
  color: string;
  onClick: () => void;
};

const Pixel: React.FC<Props> = ({ color, onClick }) => {
  return (
    <div
      className="pixel"
      style={{ backgroundColor: color }}
      onClick={onClick}
    />
  );
};

export default Pixel;
