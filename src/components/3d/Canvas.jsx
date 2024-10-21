import { Canvas as CVS } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { createContext } from "react";

export const CanvasContext = createContext({
  canvasRef: { current: null },
});

const Canvas = ({ children }) => {
  const canvasRef = useRef();

  useLayoutEffect(() => {
    canvasRef.current.width = window.innerWidth;
    canvasRef.current.height = window.innerHeight;
  }, []);

  return (
    <CVS
      ref={canvasRef}
      style={{ position: "fixed", zIndex: 5 }}
      id="threejs"
      className="threejs"
      gl={{ alpha: true, antialias: true }}
      perspective
      camera={{ position: [0, 0, 25], width: 10 }}
    >
      {children}
    </CVS>
  );
};
export default Canvas;
