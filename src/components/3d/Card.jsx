import { forwardRef, useRef } from "react";
import * as THREE from "three";

const card = {
  width: 10,
  height: 15.8,
  radius: 0.5,
};

const shape = new THREE.Shape();
const x = card.width / 2 - card.radius;
const y = card.height / 2 - card.radius;
shape
  .absarc(x, y, card.radius, Math.PI / 2, 0, true)
  .lineTo(x + card.radius, -y)
  .absarc(x, -y, card.radius, 0, -Math.PI / 2, true)
  .lineTo(-x, -(y + card.radius))
  .absarc(-x, -y, card.radius, -Math.PI / 2, Math.PI, true)
  .lineTo(-(x + card.radius), y, card.radius, Math.PI, Math.PI / 2, true)
  .absarc(-x, y, card.radius, Math.PI, Math.PI / 2, true);

const Card = forwardRef(({ color }, ref) => {
  return (
    <mesh ref={ref} rotation={[0, 0, Math.PI * 0.05]}>
      <extrudeGeometry args={[shape, { depth: 0.01, bevelThickness: 0.1 }]} />
      <meshStandardMaterial color={color} roughness={0.5} metalness={0.5} side={THREE.DoubleSide} />
    </mesh>
  );
});

Card.displayName = "Card";
export default Card;
