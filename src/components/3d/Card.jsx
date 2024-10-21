import { useEffect, useRef } from "react";
import * as THREE from "three";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useFrame, useThree } from "@react-three/fiber";

gsap.registerPlugin(ScrollTrigger);

const card = {
  width: 10,
  height: 15.8,
  radius: 0.5,
  position: [0, 0, 0],
  rotation: [0, 0, Math.PI * 0.05],
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

const Card = ({ color }) => {
  const cardRef = useRef();
  const mouseRef = useRef({
    isClicking: false,
    x: 0,
    y: 0,
  });

  const { camera } = useThree();

  useEffect(() => {
    gsap.to(cardRef.current.rotation, { y: -Math.PI * 4, duration: 2.5, ease: "back.out(2.5)" });

    const cardContainers = document.querySelectorAll(".card-container");

    const sections = document.querySelectorAll(".section");

    sections.forEach((section, i) => {
      if (i >= cardContainers.length) {
        return;
      }

      const container = cardContainers[i];
      const containerMatrix = container.getBoundingClientRect();
      const containerCenterX = (containerMatrix.left + containerMatrix.right) / 2;
      const canvasCenterX = window.innerWidth / 2;
      const cardPositionX = (containerCenterX - canvasCenterX) / 20;

      gsap
        .timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            scrub: true,
            markers: true,
            snap: 1,
          },
        })
        .to(cardRef.current.position, {
          x: cardPositionX,
          z: -12,
        });
    });
  }, []);

  const onMouseDown = (e) => {
    if (!e.target.classList.contains("card-container")) {
      return;
    }

    mouseRef.current.isClicking = true;
    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
  };

  const onMouseMove = (e) => {
    if (!mouseRef.current.isClicking) {
      return;
    }

    const deltaX = e.clientX - mouseRef.current.x;
    const deltaY = e.clientY - mouseRef.current.y;

    cardRef.current.rotation.x += deltaY / 150;
    cardRef.current.rotation.y += deltaX / 150;

    mouseRef.current.x = e.clientX;
    mouseRef.current.y = e.clientY;
  };

  const onMouseUp = () => {
    mouseRef.current.isClicking = false;
  };

  useEffect(() => {
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  useFrame((_, delta) => {
    if (mouseRef.current.isClicking) {
      return;
    }

    cardRef.current.rotation.y += delta;
  });

  return (
    <>
      <mesh ref={cardRef} rotation={card.rotation}>
        <extrudeGeometry args={[shape, { depth: 0.01, bevelThickness: 0.1 }]} />
        <meshStandardMaterial color={color} roughness={0.5} metalness={0.7} side={THREE.DoubleSide} />
      </mesh>
    </>
  );
};

export default Card;
