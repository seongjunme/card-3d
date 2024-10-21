import CardDescription from "../components/2d/CardDescription";
import Section from "../components/2d/Section";
import CardContainer from "../components/2d/CardContainer";

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
  };

  return (
    <>
      <Section>
        <CardDescription title={introduce.student.title} description={introduce.student.description} />
        <CardContainer cardColor={cardColor} setCardColor={setCardColor} />
      </Section>
      <Section>
        <CardContainer cardColor={cardColor} setCardColor={setCardColor} />
        <CardDescription title={introduce.zikzang.title} description={introduce.zikzang.description} />
      </Section>
      <Section>
        <CardDescription title={introduce.hrdk.title} description={introduce.hrdk.description} />
        <CardContainer cardColor={cardColor} setCardColor={setCardColor} />
      </Section>
    </>
  );
};
export default CardIntroduce;
