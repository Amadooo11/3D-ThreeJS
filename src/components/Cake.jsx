import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import * as THREE from "three";
import { useCustomization } from '../contexts/Customization';

const Cake = (props) => {
  const { material, cakeColor } = useCustomization();
  const { nodes, materials } = useGLTF('./models/Cake.gltf');

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
      <mesh geometry={nodes.polySurface26_lambert1_0.geometry} position={[-0.073, -1.193, 0.045]} rotation={[0, 0.924, 0]} scale={[0.016, 0.011, 0.016]}>
        <meshStandardMaterial {...(material == "water" ? waterTextureProps : chocoTextureProps)}
          color={cakeColor} />
      </mesh>
      <mesh geometry={nodes.polySurface26_lambert1_0001.geometry} position={[-0.073, -0.043, 0.045]} rotation={[0, 0.924, 0]} scale={[0.012, 0.008, 0.013]} >
        <meshStandardMaterial {...chocoTextureProps} color={cakeColor.color} />

      </mesh>
      <mesh geometry={nodes.cake.geometry} position={[-0.079, 1.596, 0.036]} rotation={[0, 0.924, 0]} scale={[0.719, 0.198, 0.719]} >
        <meshStandardMaterial {...chocoTextureProps} color={cakeColor.color} />

      </mesh>
      <mesh geometry={nodes.Object_9.geometry} material={materials['Material.003']} position={[0.142, -1.494, 0.026]} rotation={[0, 0.924, 0]} />
      <mesh geometry={nodes.Object_10.geometry} material={materials['Material.003']} position={[0.142, -1.494, 0.026]} rotation={[0, 0.924, 0]} />
      <mesh geometry={nodes.cake.geometry} material={materials['Material.002']} position={[-0.079, 1.596, 0.036]} rotation={[0, 0.924, 0]} scale={[0.719, 0.198, 0.719]} />
      <mesh geometry={nodes.cake001.geometry} material={materials['Material.011']} position={[-0.051, 1.619, 0.046]} rotation={[0, 0.924, 0]} scale={[0.662, 0.019, 0.619]} />
      <mesh geometry={nodes.cake002.geometry} material={materials['Material.014']} position={[-0.086, 1.618, 0.048]} rotation={[0, 0.924, 0]} scale={[0.69, 0.016, 0.69]} />
      <mesh geometry={nodes.cake004.geometry} material={materials['Material.016']} position={[-0.081, 1.614, 0.039]} rotation={[0, 0.924, 0]} scale={[0.686, 0.121, 0.686]} />
      <mesh geometry={nodes.cake005.geometry} material={materials['Material.017']} position={[-0.087, 1.615, 0.025]} rotation={[0, 0.924, 0]} scale={[0.678, 0.119, 0.678]} />
    </group>
  );
}

useGLTF.preload('/Cake1.gltf');
export default Cake;
