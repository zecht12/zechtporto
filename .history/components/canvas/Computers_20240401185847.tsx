'use client'

import React,{Suspense,useEffect,useState} from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Canvas } from '@react-three/fiber'

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf')
  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor='black' />
      <pointLight intensity={1} />
      <primitive object={computer.scene} />
    </mesh>
  )
}

const ComputerCanvas = () =>{
  return(
    <Canvas frameloop="demand" shadows camera={{position:[20,3,5], fov: 25}} gl={{preserveDrawingBuffer: true}}>
      <Suspense fallback={/>
    </Canvas>
  )
}

export default Computers