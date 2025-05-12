import React from "react";

// Define the Props type to specify the expected properties for the Pixel component
type Props = {
  color: string; // The background color of the pixel passed as a prop
  onClick: () => void; // A callback function that will be triggered when the pixel is clicked
};

// Pixel functional component that receives color and onClick as props
const Pixel: React.FC<Props> = ({ color, onClick }) => {
  return (
    <div
      className="pixel" // CSS class for styling the pixel
      style={{ backgroundColor: color }} // Set the background color of the pixel based on the 'color' prop
      onClick={onClick} // Trigger the onClick callback when the pixel is clicked
    />
  );
};

// Export the Pixel component for use in other parts of the app
export default Pixel;
