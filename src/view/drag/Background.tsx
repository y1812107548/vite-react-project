import React from "react";
export default function Background({
  position,
}: {
  position: { x: number; y: number };
}) {
  return (
    <div>
      <div
        style={{
          position: "absolute",
          transform: `translate(${position.x}px, ${position.y}px)`,
          width: 250,
          height: 250,
          backgroundColor: "rgba(200, 200, 0, 0.2)",
        }}
      ></div>
    </div>
  );
}
