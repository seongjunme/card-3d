import { extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { PerspectiveCamera } from "three";
import { OrbitControls as OControls } from "three/examples/jsm/controls/OrbitControls.js";
extend({ OrbitControls: OControls });

const OrbitControls = () => {
  const { camera, gl } = useThree();
  const controls = useRef();

  useFrame(() => {
    controls.current?.update();
  });

  return (
    <orbitControls
      ref={controls}
      args={[camera, gl.domElement]}
      enableZoom={false}
      autoRotate={true}
      autoRotateSpeed={5}
      rotateSpeed={0.75}
      enableDamping={true}
      minPolarAngle={Math.PI / 2 - Math.PI / 3}
      maxPolarAngle={Math.PI / 2 + Math.PI / 3}
    />
  );
};
export default OrbitControls;
