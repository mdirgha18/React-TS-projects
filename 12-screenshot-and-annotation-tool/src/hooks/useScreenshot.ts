// Import html2canvas library to capture screenshots of DOM elements
import html2canvas from "html2canvas";

// Asynchronously captures a screenshot of the DOM element with the given ID
export async function useScreenshot(id = "screenshot-area") {
  // Find the element by ID in the DOM
  const element = document.getElementById(id);
  if (!element) return null; // Return null if element is not found

  // Use html2canvas to render the element to a canvas
  const canvas = await html2canvas(element);

  // Convert the canvas to a PNG data URL and return it
  return canvas.toDataURL("image/png");
}
