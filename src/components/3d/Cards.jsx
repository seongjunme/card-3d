import * as THREE from "three";
import { useRef, useEffect, useState } from "react";
import { switchCard } from "../../animation/card";
import Card from "./Card";
import gsap from "gsap";

const Cards = ({ color, selectedCard, onSwitchComplete }) => {
  const [mainCard, setMainCard] = useState(selectedCard);
  const cardsRef = useRef({
    student: null,
    zikzang: null,
    hrdk: null,
  });

  useEffect(() => {
    // switchCard(cardsRef.current[mainCard], cardsRef.current[selectedCard], () => {
    //   setMainCard(selectedCard);
    //   onSwitchComplete();
    // });
  }, [selectedCard]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(function (entries) {
      if (entries[0].intersectionRatio <= 0) return;

      gsap.to(cardsRef.current.student.rotation, { y: -Math.PI * 4, duration: 2.5, ease: "back.out(2.5)" });
    });
    // 주시 시작
    intersectionObserver.observe(document.querySelector("canvas"));

    return () => {
      intersectionObserver.unobserve(document.querySelector("canvas"));
    };
  }, []);

  return (
    <group>
      <Card color={color} ref={(node) => (cardsRef.current.student = node)} />
    </group>
  );
};
export default Cards;
