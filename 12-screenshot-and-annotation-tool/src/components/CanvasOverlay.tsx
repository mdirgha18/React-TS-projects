import React, { useRef, useState } from "react";
import { Annotation, Point } from "../types/Annotation";
import { v4 as uuidv4 } from "uuid";

type Props = {
  tool: "select" | "rect" | "text";
};

export default function CanvasOverlay({ tool }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [annotations, setAnnotations] = useState<Annotation[]>([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const startRef = useRef<Point | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect();

    if (!bounds) return;

    const point: Point = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };

    if (tool === "rect") {
      startRef.current = point;
      setIsDrawing(true);
    }

    if (tool === "text") {
      const newAnnotation: Annotation = {
        id: uuidv4(),
        type: "text",
        start: point,
        end: point,
        text: "",
      };
      setAnnotations((prev) => [...prev, newAnnotation]);
    }

    if (tool === "select") {
      const clicked = annotations.find((a) => {
        const left = Math.min(a.start.x, a.end.x);
        const right = Math.max(a.start.x, a.end.x);
        const top = Math.min(a.start.y, a.end.y);
        const bottom = Math.max(a.start.y, a.end.y);

        return (
          point.x >= left &&
          point.x <= right &&
          point.y >= top &&
          point.y <= bottom
        );
      });

      if (clicked) {
        setSelectedId(clicked.id);
        setIsDragging(true);
        startRef.current = point;
        console.log("Selected annotation:", clicked.id);
      } else {
        setSelectedId(null);
      }
    }
    console.log("Tool is", tool);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDrawing || tool !== "rect" || !startRef.current) return;

    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const end: Point = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };

    const newAnnotation: Annotation = {
      id: uuidv4(),
      type: "rect",
      start: startRef.current,
      end,
    };

    setAnnotations((prev) => [...prev, newAnnotation]);
    setIsDrawing(false);
    setIsDragging(false);
    startRef.current = null;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !selectedId || !startRef.current) return;

    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const curr: Point = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };

    const dx = curr.x - startRef.current.x;
    const dy = curr.y - startRef.current.y;

    setAnnotations((prev) =>
      prev.map((a) =>
        a.id === selectedId
          ? {
              ...a,
              start: { x: a.start.x + dx, y: a.start.y + dy },
              end: { x: a.end.x + dx, y: a.end.y + dy },
            }
          : a
      )
    );

    startRef.current = curr;
  };
  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-10"
      style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {annotations.map((ann) => {
        if (ann.type === "rect") {
          const left = Math.min(ann.start.x, ann.end.x);
          const top = Math.min(ann.start.y, ann.end.y);
          const width = Math.abs(ann.end.x - ann.start.x);
          const height = Math.abs(ann.end.y - ann.start.y);

          return (
            <div
              key={ann.id}
              style={{
                position: "absolute",
                left,
                top,
                width,
                height,
                border: "2px solid red",
                pointerEvents: "none",
              }}
            />
          );
        }

        if (ann.type === "text") {
          return (
            <input
              key={ann.id}
              defaultValue={ann.text}
              style={{
                position: "absolute",
                left: ann.start.x,
                top: ann.start.y,
                fontSize: "14px",
                padding: "2px 4px",
                border: "1px solid #333",
              }}
              onChange={(e) => {
                const newText = e.target.value;
                setAnnotations((prev) =>
                  prev.map((a) =>
                    a.id === ann.id ? { ...a, text: newText } : a
                  )
                );
              }}
            />
          );
        }

        return null;
      })}
    </div>
  );
}
