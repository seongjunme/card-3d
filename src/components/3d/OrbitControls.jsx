import { extend, useThree } from "@react-three/fiber";
import { OrbitControls as OControls } from "three/examples/jsm/controls/OrbitControls.js";
extend({ OrbitControls: OControls });

const OrbitControls = () => {
  const { camera, gl } = useThree();

  return <orbitControls args={[camera, gl.domElement]} />;
};
export default OrbitControls;
