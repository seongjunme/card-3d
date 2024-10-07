import cn from "classnames";

const ColorButton = ({ selected, color, onClick }) => {
  return (
    <button className={cn("color-button", { selected })} style={{ backgroundColor: color }} onClick={onClick}></button>
  );
};
export default ColorButton;
