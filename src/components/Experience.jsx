import React from "react";
import { MeshReflectorMaterial, Stage, OrbitControls } from "@react-three/drei";
import Cake1 from "./Cake1";

const Experience = () => {
  return (
    <>

<OrbitControls
  enableZoom={true}
  minPolarAngle={Math.PI / 4}
  maxPolarAngle={(3 * Math.PI) / 4}
  enableDamping={true}
  dampingFactor={0.1}
  enablePan={false}
  minDistance={5} // Set a minimum zoom level to ensure the whole cake is visible
  maxDistance={10}
/>


      <Stage environment="city" intensity={0.6} castShadow={false}>
        <mesh position={[0, 0, 0]}> {/* Centered position */}
          <Cake1 />
        </mesh>
      </Stage>
      <mesh position={[0, 0, 0]}> {/* Centered position */}
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </>
  );
};

export default Experience;
