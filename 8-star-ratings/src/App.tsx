import React from "react";
import StarRating from "./StarRating"; // Importing the StarRating component

const App: React.FC = () => {
  // Function to handle the rating change
  const handleRatingChange = (rating: number) => {
    console.log("Rated:", rating); // Log the selected rating
  };

  return (
    <div style={{ padding: "40px" }}>
      <h1>Rate this product</h1>
      {/* StarRating component with props for total stars and the rating change handler */}
      <StarRating totalStars={5} onRatingChange={handleRatingChange} />
    </div>
  );
};

export default App;
