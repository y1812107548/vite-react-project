import { useState } from "react";
import Box from "./Box";
import Background from "./Background";

const initialPosition = {
  x: 0,
  y: 0,
};

export default function Drag() {
  const [shape, setShape] = useState({
    color: "orange",
    position: initialPosition,
  });

  function handleColorChange(e: { target: { value: string } }) {
    setShape({
      ...shape,
      color: e.target.value,
    });
  }

  function handleMove(dx: number, dy: number) {
    setShape({
      ...shape,
      position: {
        x: shape.position.x + dx,
        y: shape.position.y + dy,
      },
    });
  }
  return (
    <>
      <select value={shape.color} onChange={handleColorChange}>
        <option value="red">red</option>
        <option value="orange">orange</option>
        <option value="yellow">yellow</option>
      </select>
      <Background position={shape.position}></Background>
      <Box color={shape.color} position={shape.position} onMove={handleMove}>
        Drag me!
      </Box>
    </>
  );
}
