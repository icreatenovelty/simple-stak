import React from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { Text } from '@react-three/drei'

function TaskBox({ id, position, name, color }) {
   let taskBoxPosition = [0, position * 0.4, 0]
   return (
      // mesh comes from R3F
      <mesh position={taskBoxPosition}>
         <boxBufferGeometry attach='geometry' args={[1, 0.3, 1]} />
         <meshLambertMaterial attach='material' color={color} />
      </mesh>
   )
}

export default TaskBox
