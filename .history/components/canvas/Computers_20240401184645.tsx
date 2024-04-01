'use client'

import React,{Suspense,useEffect,useState} from 'react'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'
import CanvasLoader from '../Loader'
import { Canvas } from '@react-three/fiber'

const Computers = () => {
  const computer = useGLTF('./desktop_pc')
  return (
    <div>Computers</div>
  )
}

export default Computers