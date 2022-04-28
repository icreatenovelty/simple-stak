import React from 'react'
import { Canvas, useFrame } from 'react-three-fiber'

function TaskBox({ id, position, name, color }) {
  return (
    // mesh comes from R3F
    <mesh position={[0, position * 0.4, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 0.3, 1]} />
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  )
}

export default TaskBox
