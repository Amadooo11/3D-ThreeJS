import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from "three";
import { flavorColors, useCustomization } from '../contexts/Customization';

const Cake1 = (props) => {
  const { material, cake1Color, cake2Color, cake3Color, flavorColor, fillingColor } = useCustomization();
  const { nodes, materials } = useGLTF('./models/Cake1.gltf');

  console.log("Selected Tier: ", material);
  console.log("Cake1 Color: ", cake1Color);
  console.log("Cake2 Color: ", cake2Color);
  console.log("Cake3 Color: ", cake3Color);
  console.log("Flavor Color: ", flavorColor);
  console.log("Filling Color: ", fillingColor);

  const waterTextureProps = useTexture({
    // map: "./textures/Tier1/Watercolor_Paper_001_COLOR.jpg",
    normalMap: "./textures/Tier1/Watercolor_Paper_001_DISP.png",
    roughnessMap: "./textures/Tier1/Watercolor_Paper_001_NORM.jpg",
    aoMap: "./textures/Tier1/Watercolor_Paper_001_OCC.jpg",
  });
  // waterTextureProps.map.repeat.set(3, 3);
  waterTextureProps.normalMap.repeat.set(3, 3);
  waterTextureProps.roughnessMap.repeat.set(3, 3);
  waterTextureProps.aoMap.repeat.set(3, 3);

  waterTextureProps.normalMap.wrapS = waterTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  waterTextureProps.roughnessMap.wrapS =
    waterTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  waterTextureProps.aoMap.wrapS = waterTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;


  const chocoTextureProps = useTexture({
    // map: "./textures/Tier2/Chocolate_001_ambientOcclusion.jpg",
    normalMap: "./textures/Tier2/Material_1470.jpg",
    roughnessMap: "./textures/Tier2/Chocolate_001_baseColor.jpg",
    aoMap: "./textures/Tier2/Chocolate_001_baseColor.jpg",
  });
  // leatherTextureProps.map.repeat.set(3, 3);
  chocoTextureProps.normalMap.repeat.set(3, 3);
  chocoTextureProps.roughnessMap.repeat.set(3, 3);
  chocoTextureProps.aoMap.repeat.set(3, 3);

  chocoTextureProps.normalMap.wrapS = chocoTextureProps.normalMap.wrapT =
    THREE.MirroredRepeatWrapping;
  chocoTextureProps.roughnessMap.wrapS =
    chocoTextureProps.roughnessMap.wrapT = THREE.MirroredRepeatWrapping;
  chocoTextureProps.aoMap.wrapS = chocoTextureProps.aoMap.wrapT =
    THREE.RepeatWrapping;

  return (
    <group {...props} dispose={null}>
     
      <mesh geometry={nodes.Tier1.geometry} position={[-0.073, -1.193, 0.045]} rotation={[0, 0.924, 0]} scale={[0.016, 0.011, 0.016]} >
        <meshStandardMaterial 
          color={cake1Color.color} />
      </mesh>

      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.001']} position={[0.142, -1.494, 0.026]} rotation={[0, 0.924, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['Material.001']} position={[0.142, -1.494, 0.026]} rotation={[0, 0.924, 0]} />
      
      <mesh geometry={nodes.TIer3.geometry} position={[-0.079, 1.596, 0.036]} rotation={[0, 0.924, 0]} scale={[0.719, 0.198, 0.719]} >
        <meshStandardMaterial color={cake2Color.color} />

      </mesh>

      <group position={[-0.051, 1.619, 0.046]} rotation={[0, 0.924, 0]} scale={[0.662, 0.019, 0.619]}>
        <mesh geometry={nodes.Cylinder004.geometry} material={materials['Material.005']} >
        <meshStandardMaterial color={fillingColor.color} />
          </mesh>
        <mesh geometry={nodes.Cylinder004_1.geometry} material={materials['Material.006']} >
        <meshStandardMaterial color={fillingColor.color} />
          </mesh>
 
      </group>
      <group position={[-0.081, 1.614, 0.039]} rotation={[0, 0.924, 0]} scale={[0.686, 0.121, 0.686]}>
        <mesh geometry={nodes.Cylinder009.geometry} material={materials['Material.007']} >
        <meshStandardMaterial color={flavorColor.color} />
          </mesh>
        <mesh geometry={nodes.Cylinder009_1.geometry} material={materials['Material.008']} >
        <meshStandardMaterial color={flavorColor.color} />
          </mesh>
 
      </group>

      
      <group position={[-0.073, 2.39, 0.045]} rotation={[-0.007, 0.922, -3.139]} scale={[0.012, 0.008, 0.013]}>
        <mesh geometry={nodes.polySurface26_lambert1_0009.geometry}>
        <meshStandardMaterial color={cake3Color.color} />
          </mesh>
          <mesh geometry={nodes.polySurface26_lambert1_0009_1.geometry}>
            <meshStandardMaterial color={cake3Color.color} />
          </mesh>
 
      </group>
      
    </group>
  )
}

useGLTF.preload('/Cake1.gltf')
export default Cake1;
