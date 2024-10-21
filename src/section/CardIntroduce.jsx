import ColorButton from "../components/2d/ColorButton";
import { COLORS } from "../constants/color";

const CardIntroduce = ({ cardColor, setCardColor }) => {
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

  return (
    <>
      {Object.entries(introduce).map(([type, { title, description }], index) => (
        <section className="section">
          <div className="space-between" style={{ height: "500px" }}>
            <div className="margin-top z9999">
              <div className="description">
                <h5>{title}</h5>
                <p>{description}</p>
              </div>
            </div>

            <div className="card-section" style={{ width: "300px", position: "relative" }}>
              <div
                className="color-button-group center"
                style={{ position: "absolute", bottom: "-15px", left: "12.5%" }}
              >
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
      ))}
    </>
  );
};
export default CardIntroduce;
