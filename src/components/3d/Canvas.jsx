import { Canvas as CVS } from "@react-three/fiber";

const Canvas = ({ children }) => {
  return (
    <div style={{ width: "500px", height: "500px" }}>
      <CVS className="threejs" gl={{ alpha: true }} camera={{ position: [0, 0, 3] }}>
        {children}
      </CVS>
    </div>
  );
};
export default Canvas;
