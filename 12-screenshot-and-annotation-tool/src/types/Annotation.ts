// A point in 2D space
export type Point = {
  x: number;
  y: number;
};

// The types of annotations supported
export type AnnotationType = "rect" | "text";

// Base interface shared by all annotations
export interface AnnotationBase {
  id: string;        // Unique identifier for the annotation
  type: AnnotationType; // Type of annotation: "rect" or "text"
  start: Point;      // Starting point of the annotation
  end: Point;        // Ending point of the annotation
}

// Specific interface for rectangle annotations
export interface RectAnnotation extends AnnotationBase {
  type: "rect";      // Ensures type is exactly "rect"
}

// Specific interface for text annotations
export interface TextAnnotation extends AnnotationBase {
  type: "text";      // Ensures type is exactly "text"
  text: string;      // Text content for the annotation
}

// Union type for all possible annotation types
export type Annotation = RectAnnotation | TextAnnotation;
