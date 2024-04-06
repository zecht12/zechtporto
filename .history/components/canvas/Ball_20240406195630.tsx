import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {Decal,Float,OrbitControls,Preload,useTexture,} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props:any) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <Floa>Ball</Floa>
  )
}

const BallCanvas = (icon:any) => {
return(
  <Canvas frameloop='demand' shadows dpr={[1, 2]} camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }} >
    <Suspense fallback={<CanvasLoader />}>
      <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
      <Ball imgUrl={icon} />
    </Suspense>
    <Preload all />
  </Canvas>
)
}

export default BallCanvas