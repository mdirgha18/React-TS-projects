import { Annotation } from "../types/annotation";

// Draws an annotation (rectangle or text) on the given 2D canvas context
export function drawAnnotation(
  ctx: CanvasRenderingContext2D, // Canvas 2D context to draw on
  annotation: Annotation         // Annotation object to draw
) {
  // Set common drawing styles
  ctx.strokeStyle = "#ff0000"; // Red border for rectangles
  ctx.lineWidth = 2;

  // Handle drawing for rectangle annotations
  if (annotation.type === "rect") {
    const width = annotation.end.x - annotation.start.x;
    const height = annotation.end.y - annotation.start.y;

    // Draw the rectangle based on start and end points
    ctx.strokeRect(annotation.start.x, annotation.start.y, width, height);
  }

  // Handle drawing for text annotations
  if (annotation.type === "text") {
    ctx.font = "16px sans-serif";    // Set font style
    ctx.fillStyle = "#000000";       // Set text color
    ctx.fillText(annotation.text, annotation.start.x, annotation.start.y); // Draw text
  }
}
