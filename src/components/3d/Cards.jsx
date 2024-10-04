import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { switchCard } from "../../animation/card";

const Cards = ({ selectedCard, onSwitchComplete }) => {
  const [mainCard, setMainCard] = useState(selectedCard);
  const cardsRef = useRef({
    student: null,
    zikzang: null,
    hrdk: null,
  });

  const isClicking = useRef(false);

  useFrame((_, delta) => {
    if (isClicking.current) {
      return;
    }

    cardsRef.current[mainCard].rotation.y = (cardsRef.current[mainCard].rotation.y + delta) % (Math.PI * 2);
  });

  useEffect(() => {
    switchCard(cardsRef.current[mainCard], cardsRef.current[selectedCard], () => {
      setMainCard(selectedCard);
      onSwitchComplete();
    });
  }, [selectedCard]);

  useEffect(() => {
    const onMouseUp = () => {
      isClicking.current = false;
    };

    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <group onPointerDown={() => (isClicking.current = true)}>
      <group ref={(node) => (cardsRef.current.student = node)}>
        <mesh>
          <boxGeometry args={[1 * 2, 1.58 * 2, 0.005, 100, 100]} />
          <meshStandardMaterial color="blue" />
        </mesh>
        <mesh position={[0, 0, -0.006]}>
          <boxGeometry args={[1 * 2, 1.58 * 2, 0.005, 100, 100]} />
          <meshStandardMaterial color="red" side={THREE.BackSide} />
        </mesh>
      </group>
      <group ref={(node) => (cardsRef.current.zikzang = node)} scale={[0.2, 0.2, 0.2]} position={[2, 1.5, -0.5]}>
        <mesh>
          <boxGeometry args={[1 * 2, 1.58 * 2, 0.005, 100, 100]} />
          <meshStandardMaterial color="green" />
        </mesh>
        <mesh position={[0, 0, -0.006]}>
          <boxGeometry args={[1 * 2, 1.58 * 2, 0.005, 100, 100]} />
          <meshStandardMaterial color="yellow" side={THREE.BackSide} />
        </mesh>
      </group>
      <group ref={(node) => (cardsRef.current.hrdk = node)} scale={[0.2, 0.2, 0.2]} position={[2, 0.5, -0.5]}>
        <mesh>
          <boxGeometry args={[1 * 2, 1.58 * 2, 0.005, 100, 100]} />
          <meshStandardMaterial color="mediumpurple" />
        </mesh>
        <mesh position={[0, 0, -0.006]}>
          <boxGeometry args={[1 * 2, 1.58 * 2, 0.005, 100, 100]} />
          <meshStandardMaterial color="orange" side={THREE.BackSide} />
        </mesh>
      </group>
    </group>
  );
};
export default Cards;
