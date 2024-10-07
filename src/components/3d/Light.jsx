const Light = () => {
  return (
    <>
      <ambientLight color="#ffffff" intensity={0.8} position={[-5, -5, -5]} />;
      <directionalLight color="#ffffff" intensity={0.6} position={[1, 1, 3]} />
      <directionalLight color="#ffffff" intensity={0.6} position={[-1, 1, -3]} />
    </>
  );
};
export default Light;
