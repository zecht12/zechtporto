import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {Decal,Float,OrbitControls,Preload,useTexture,} from "@react-three/drei";
import CanvasLoader from "../Loader";

const Ball = (props:any) => {
  const [decal] = useTexture([props.imgUrl]);
  return (
    <div>Ball</div>
  )
}

const BallCanvas = (icon:any) => {

}

export default BallC