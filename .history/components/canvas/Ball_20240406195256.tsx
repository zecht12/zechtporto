import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {Decal,Float,OrbitControls,Preload,useTexture,} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props:any) => {
  const [decal] = useTexture([props.im])
  return (
    <div>Ball</div>
  )
}

export default Ball