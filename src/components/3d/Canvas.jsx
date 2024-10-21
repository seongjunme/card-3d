import { Canvas as CVS } from "@react-three/fiber";
import { useLayoutEffect, useRef } from "react";
import { createContext } from "react";

export const CanvasContext = createContext({
  canvasRef: { current: null },
});

const Canvas = ({ children }) => {
  const canvasRef = useRef();

  useLayoutEffect(() => {
    const section = document.querySelector(".section");
    console.log(section.clientWidth, window.innerWidth);
    canvasRef.current.width = section.clientWidth;
    canvasRef.current.height = section.clientHeight;
  }, []);

  return (
    <CVS
      ref={canvasRef}
      style={{ position: "fixed", zIndex: 5 }}
      id="threejs"
      className="threejs"
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, 0, 25] }}
      pixelratio={Math.min(window.devicePixelRatio, 2)}
    >
      {children}
    </CVS>
  );
};
export default Canvas;
