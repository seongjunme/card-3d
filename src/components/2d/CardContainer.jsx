import { COLORS } from "../../constants/color";
import ColorButton from "./ColorButton";

const CardContainer = ({ cardColor, setCardColor }) => {
  return (
    <div className="card-container center z9999" style={{ width: "300px", position: "relative" }}>
      <div className="color-button-group center" style={{ position: "absolute", bottom: "0" }}>
        {COLORS.map((color) => (
          <ColorButton key={color} selected={cardColor === color} color={color} onClick={() => setCardColor(color)} />
        ))}
      </div>
    </div>
  );
};
export default CardContainer;
