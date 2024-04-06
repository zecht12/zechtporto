'use client'

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {Decal,Float,OrbitControls,Preload,useTexture} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props:any) => {
  const [decal] = useTexture([props.imgUrl]);

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      <mesh castShadow receiveShadow scale={2.75}>
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }:any) => {
  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;