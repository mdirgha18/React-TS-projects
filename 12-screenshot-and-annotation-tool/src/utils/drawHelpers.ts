import { Annotation } from "../types/annotation";

export function drawAnnotation(
  ctx: CanvasRenderingContext2D,
  annotation: Annotation
) {
  ctx.strokeStyle = "#ff0000";
  ctx.lineWidth = 2;

  if (annotation.type === "rect") {
    const width = annotation.end.x - annotation.start.x;
    const height = annotation.end.y - annotation.start.y;
    ctx.strokeRect(annotation.start.x, annotation.start.y, width, height);
  }

  if (annotation.type === "text") {
    ctx.font = "16px sans-serif";
    ctx.fillStyle = "#000000";
    ctx.fillText(annotation.text, annotation.start.x, annotation.start.y);
  }
}
