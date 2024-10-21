const Light = () => {
  return (
    <>
      <ambientLight color="#ffffff" intensity={3} position={[-5, -5, -5]} />;
      <directionalLight color="#ffffff" intensity={1} position={[1, 1, 3]} />
    </>
  );
};
export default Light;
