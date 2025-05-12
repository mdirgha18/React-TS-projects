import React, { useRef, useState } from "react";
import { Annotation, Point } from "../types/Annotation";
import { v4 as uuidv4 } from "uuid";

type Props = {
  tool: "select" | "rect" | "text"; // Tool currently selected by the user
};

export default function CanvasOverlay({ tool }: Props) {
  const [selectedId, setSelectedId] = useState<string | null>(null); // Tracks selected annotation ID
  const [isDragging, setIsDragging] = useState(false); // Flag for dragging mode
  const [annotations, setAnnotations] = useState<Annotation[]>([]); // List of all annotations
  const [isDrawing, setIsDrawing] = useState(false); // Flag for drawing rectangles
  const startRef = useRef<Point | null>(null); // Starting point for drawing or dragging
  const containerRef = useRef<HTMLDivElement>(null); // Ref for the container div

  // Handle mouse down event for initiating drawing, text entry, or selection
  const handleMouseDown = (e: React.MouseEvent) => {
    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    // Get mouse position relative to container
    const point: Point = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };

    if (tool === "rect") {
      // Start drawing rectangle
      startRef.current = point;
      setIsDrawing(true);
    }

    if (tool === "text") {
      // Add new text annotation at clicked point
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
      // Check if user clicked inside an annotation to select it
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

  // Handle mouse up event for completing rectangle drawing
  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDrawing || tool !== "rect" || !startRef.current) return;

    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const end: Point = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };

    // Create new rectangle annotation
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

  // Handle mouse move event for dragging annotations
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !selectedId || !startRef.current) return;

    const bounds = containerRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const curr: Point = {
      x: e.clientX - bounds.left,
      y: e.clientY - bounds.top,
    };

    // Calculate movement delta
    const dx = curr.x - startRef.current.x;
    const dy = curr.y - startRef.current.y;

    // Update position of the selected annotation
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

    // Update reference point for next drag step
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
      {/* Render all annotations */}
      {annotations.map((ann) => {
        if (ann.type === "rect") {
          // Calculate dimensions and position
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
                pointerEvents: "none", // Prevents interfering with mouse events
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
                // Update text as user types
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
