import { forwardRef } from "react";
import * as THREE from "three";

const cardRatio = {
  width: 1,
  height: 1.58,
};

const cardScale = 2;

const Card = forwardRef(({ scale, position, color }, ref) => {
  return (
    <group ref={ref} scale={scale} position={position}>
      <mesh>
        <boxGeometry args={[cardRatio.width * cardScale, cardRatio.height * cardScale, 0.005, 100, 100]} />
        <meshStandardMaterial color={color[0]} />
      </mesh>
      <mesh position={[0, 0, -0.006]}>
        <boxGeometry args={[cardRatio.width * cardScale, cardRatio.height * cardScale, 0.005, 100, 100]} />
        <meshStandardMaterial color={color[1]} side={THREE.BackSide} />
      </mesh>
    </group>
  );
});

Card.displayName = "Card";
export default Card;
