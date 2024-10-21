import Title from "./section/Title";
import CardIntroduce from "./section/CardIntroduce";
import Canvas from "./components/3d/Canvas";
import OrbitControls from "./components/3d/OrbitControls";
import Light from "./components/3d/Light";
import Card from "./components/3d/Card";
import { COLORS } from "./constants/color";
import { useState } from "react";

const App = () => {
  const [cardColor, setCardColor] = useState(COLORS[0]);

  return (
    <>
      <Canvas>
        <Card color={cardColor} />
        {/* <OrbitControls /> */}
        <Light />
      </Canvas>
      <Title />
      <CardIntroduce cardColor={cardColor} setCardColor={setCardColor} />
    </>
  );
};
export default App;
