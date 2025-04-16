import React from "react";
import StarRating from "./StarRating";

const App: React.FC = () => {
  const handleRatingChange = (rating: number) => {
    console.log("Rated:", rating);
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Rate this product</h1>
      <StarRating totalStars={5} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default App;
