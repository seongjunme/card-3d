import { useState, useRef } from "react";
import Canvas from "../components/3d/Canvas";
import OrbitControls from "../components/3d/OrbitControls";
import Light from "../components/3d/Light";
import Cards from "../components/3d/Cards";
import cn from "classnames";

const CardIntroduce = () => {
  const [selectedCard, setSelectedCard] = useState("student");
  const isSwitching = useRef(false);

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
  };

  const onSwitch = (type) => {
    if (isSwitching.current) return;
    isSwitching.current = true;
    setSelectedCard(type);
  };

  const onSwitchComplete = () => {
    isSwitching.current = false;
  };

  return (
    <section className="section">
      <div className="space-between">
        <div className="margin-top">
          <div className="badges flex-start">
            <button
              className={cn("badge", { active: selectedCard === "student" })}
              onClick={() => onSwitch("student")}
              disabled={selectedCard === "student"}
            >
              STUDENT
            </button>
            <button
              className={cn("badge", { active: selectedCard === "zikzang" })}
              onClick={() => onSwitch("zikzang")}
              disabled={selectedCard === "zikzang"}
            >
              ZIKZANG
            </button>
            <button
              className={cn("badge", { active: selectedCard === "hrdk" })}
              onClick={() => onSwitch("hrdk")}
              disabled={selectedCard === "hrdk"}
            >
              HRDK
            </button>
          </div>
          <div className="description">
            <h5>{introduce[selectedCard].title}</h5>
            <p>{introduce[selectedCard].description}</p>
          </div>
        </div>
        <Canvas>
          <Cards selectedCard={selectedCard} onSwitchComplete={onSwitchComplete} />
          <OrbitControls />
          <Light />
        </Canvas>
      </div>
    </section>
  );
};
export default CardIntroduce;
