'use client'

import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader";

const Computers = ({ isMobile }:any) => {
  const computer = useGLTF('/desktop_pc/scene.gltf');

  return (
    <mesh>
      {/* Remove default hemisphereLight */}
      {/* <hemisphereLight intensity={0.15} groundColor='black' /> */}
      {/* Create Three.js HemisphereLight */}
      <primitive object={new THREE.HemisphereLight(0xffffff, 0x000000, 0.15)} />
      
      {/* Remove default spotLight */}
      {/* <spotLight position={[-20, 50, 10]} angle={0.3} penumbra={1} intensity={1} castShadow /> */}
      {/* Create Three.js SpotLight */}
      <primitive object={new THREE.SpotLight(0xffffff, 1, 0, Math.PI / 4, 1, 2)} position={[-20, 50, 10]} />
      <primitive object={new THREE.PointLight(0xffffff, 1)} />
      
      <primitive object={computer.scene} scale={isMobile ? 0.7 : 0.75} position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]} rotation={[-0.01, -0.2, -0.1]} />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);
    const handleMediaQueryChange = (event:any) => {
      setIsMobile(event.matches);
    };
    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
