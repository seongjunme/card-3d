import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { switchCard } from "../../animation/card";
import Card from "./Card";

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
      <Card color={["blue", "red"]} ref={(node) => (cardsRef.current.student = node)} />
      <Card
        color={["green", "yellow"]}
        ref={(node) => (cardsRef.current.zikzang = node)}
        scale={[0.2, 0.2, 0.2]}
        position={[2, 1.5, -0.5]}
      />
      <Card
        color={["purple", "yellow"]}
        ref={(node) => (cardsRef.current.hrdk = node)}
        scale={[0.2, 0.2, 0.2]}
        position={[2, 0.5, -0.5]}
      />
    </group>
  );
};
export default Cards;
