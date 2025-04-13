export type Point = {
  x: number;
  y: number;
};

export type AnnotationType = "rect" | "text";

export interface AnnotationBase {
  id: string;
  type: AnnotationType;
  start: Point;
  end: Point;
}

export interface RectAnnotation extends AnnotationBase {
  type: "rect";
}

export interface TextAnnotation extends AnnotationBase {
  type: "text";
  text: string;
}

export type Annotation = RectAnnotation | TextAnnotation;
