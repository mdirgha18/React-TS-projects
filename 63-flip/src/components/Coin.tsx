import React from "react";

type CoinProps = {
  info: {
    imgSrc: string;
    side: string;
  };
};

const Coin: React.FC<CoinProps> = ({ info }) => {
  return (
    <div className="Coin">
      <img
        style={{ width: "200px", height: "200px" }}
        src={info.imgSrc}
        alt={info.side}
      />
    </div>
  );
};

export default Coin;
