import React from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Text } from '@react-three/drei'

function TaskBoxText({ id, position, name, color }) {
  let taskBoxPosition = [-0.4, position * 0.4+0.12, 0.52]
  return (
    <>
      <Text
        scale={[2, 2, 2]}
        color="black" // default
        anchorX="left" // default
        anchorY="center" // default
        position={taskBoxPosition}
      >
        {name}
        <meshStandardMaterial attach="material" opacity={0.5} />
      </Text>
    </>
  )
}

export default TaskBoxText
