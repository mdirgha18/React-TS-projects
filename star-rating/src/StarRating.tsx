import React, { useState } from "react";

type StarRatingProps = {
  totalStars?: number;
  onRatingChange?: (rating: number) => void;
};

const StarRating: React.FC<StarRatingProps> = ({
  totalStars = 5,
  onRatingChange,
}) => {
  const [rating, setRating] = useState<number>(0);
  const [hover, setHover] = useState<number | null>(null);

  const handleClick = (value: number) => {
    setRating(value);
    onRatingChange?.(value);
  };

  return (
    <div style={{ display: "flex", cursor: "pointer" }}>
      {[...Array(totalStars)].map((_, index) => {
        const starValue = index + 1;

        return (
          <span
            key={starValue}
            onClick={() => handleClick(starValue)}
            onMouseEnter={() => setHover(starValue)}
            onMouseLeave={() => setHover(null)}
            style={{
              fontSize: "2rem",
              color:
                hover !== null
                  ? starValue <= hover
                    ? "#ffc107"
                    : "#e4e5e9"
                  : starValue <= rating
                  ? "#ffc107"
                  : "#e4e5e9",
              transition: "color 0.2s",
            }}
          >
            ★
          </span>
        );
      })}
    </div>
  );
};

export default StarRating;
