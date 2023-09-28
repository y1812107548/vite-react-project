import React, { useState } from "react";

interface PointerNumber {
  x: number;
  y: number;
}
export default function Box({
  children,
  color,
  position,
  onMove,
}: {
  children: React.ReactNode;
  color: string;
  position: PointerNumber;
  onMove: (dx: number, dy: number) => void;
}) {
  const [lastCoordinates, setLastCoordinates] = useState<null | PointerNumber>(
    null
  );
  function handlePointerDown(e: React.PointerEvent) {
    e.currentTarget?.setPointerCapture(e.pointerId);
    setLastCoordinates({
      x: e.clientX,
      y: e.clientY,
    });
    console.log("down", lastCoordinates);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (lastCoordinates) {
      console.log("move", lastCoordinates, e.clientX, e.clientY);
      setLastCoordinates({
        x: e.clientX,
        y: e.clientY,
      });
      const dx = e.clientX - lastCoordinates.x;
      const dy = e.clientY - lastCoordinates.y;

      onMove(dx, dy);
    }
  }
  function handlePointerUp() {
    console.log("up");
    setLastCoordinates(null);
  }
  return (
    <div
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      style={{
        width: 100,
        height: 100,
        cursor: "grab",
        backgroundColor: color,
        position: "absolute",
        border: "1px solid black",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
    >
      {children}
    </div>
  );
}
