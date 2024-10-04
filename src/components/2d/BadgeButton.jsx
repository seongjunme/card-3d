const BadgeButton = ({ name, onClick, disabled }) => {
  return (
    <button
      className={cn("badge", { active: selectedCard === name })}
      onClick={onClick}
      disabled={isSwitching.current || selectedCard === "student"}
    >
      name
    </button>
  );
};
export default BadgeButton;
