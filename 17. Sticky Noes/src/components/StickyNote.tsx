import React, { useRef } from "react";
import { StickyNoteData } from "../types/note";

type Props = {
  note: StickyNoteData;
  onUpdate: (note: StickyNoteData) => void;
  onDelete: (id: string) => void;
};

export default function StickyNote({ note, onUpdate, onDelete }: Props) {
  const noteRef = useRef<HTMLDivElement>(null);
  let offset = { x: 0, y: 0 };

  const handleMouseDown = (e: React.MouseEvent) => {
    const el = noteRef.current;
    if (!el) return;

    const shiftX = e.clientX - el.getBoundingClientRect().left;
    const shiftY = e.clientY - el.getBoundingClientRect().top;

    const moveAt = (pageX: number, pageY: number) => {
      onUpdate({ ...note, x: pageX - shiftX, y: pageY - shiftY });
    };

    const onMouseMove = (e: MouseEvent) => moveAt(e.pageX, e.pageY);
    document.addEventListener("mousemove", onMouseMove);

    document.onmouseup = () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.onmouseup = null;
    };
  };

  return (
    <div
      ref={noteRef}
      onMouseDown={handleMouseDown}
      style={{
        position: "absolute",
        left: note.x,
        top: note.y,
        width: 200,
        padding: 10,
        backgroundColor: note.color,
        boxShadow: "2px 2px 10px rgba(0,0,0,0.2)",
        cursor: "move",
      }}
    >
      <textarea
        value={note.text}
        onChange={(e) => onUpdate({ ...note, text: e.target.value })}
        style={{
          width: "100%",
          height: "100px",
          background: "transparent",
          border: "none",
          resize: "none",
        }}
      />
      <button onClick={() => onDelete(note.id)} style={{ marginTop: 5 }}>
        Delete
      </button>
    </div>
  );
}
