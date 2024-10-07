import { useState, useRef, useEffect } from "react";
import Canvas from "../components/3d/Canvas";
import OrbitControls from "../components/3d/OrbitControls";
import Light from "../components/3d/Light";
import Cards from "../components/3d/Cards";
import ColorButton from "../components/2d/ColorButton";
import { COLORS } from "../constants/color";
import gsap from "gsap";
import Card from "../components/3d/Card";

const CardIntroduce = () => {
  const [cardColor, setCardColor] = useState(COLORS[0]);
  const cardRef = useRef();

  const introduce = {
    student: {
      title: "Student Card",
      description: "Student Card is very nice.",
    },
    zikzang: {
      title: "ZIKZANG Card",
      description: "ZIKZANG Card is very awesome.",
    },
    hrdk: {
      title: "HRDK Card",
      description: "HRDK Card is very cool.",
    },
    mycar: {
      title: "MYCAR Card",
      description: "MYCAR Card is so excited.",
    },
  };

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(function (entries) {
      if (entries[0].intersectionRatio <= 0) return;

      gsap.to(cardRef.current.rotation, { y: -Math.PI * 4, duration: 2.5, ease: "back.out(2.5)" });
    });
    // 주시 시작
    intersectionObserver.observe(document.querySelector("canvas"));

    return () => {
      intersectionObserver.unobserve(document.querySelector("canvas"));
    };
  }, []);

  return (
    <section className="section">
      <div className="space-between">
        <div className="margin-top">
          <div className="description">
            <h5>{introduce.student.title}</h5>
            <p>{introduce.student.description}</p>
          </div>
        </div>
        <div>
          <Canvas>
            <Card ref={cardRef} color={cardColor} />
            <OrbitControls />
            <Light />
          </Canvas>
          <div className="center">
            {COLORS.map((color) => (
              <ColorButton
                key={color}
                selected={cardColor === color}
                color={color}
                onClick={() => setCardColor(color)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default CardIntroduce;
