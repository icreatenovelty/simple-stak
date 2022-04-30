import React from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import TaskBox from './TaskBox'
import { Text } from '@react-three/drei'


function Stak({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskBox
          key={task.id}
          position={task.position}
          name={task.name}
          color={task.color}
        />
      ))}
    </>
  )
}

export default Stak
