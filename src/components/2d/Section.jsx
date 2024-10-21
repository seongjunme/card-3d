const Section = ({ children }) => {
  return (
    <section className="section">
      <div className="space-between" style={{ height: "500px" }}>
        {children}
      </div>
    </section>
  );
};
export default Section;
