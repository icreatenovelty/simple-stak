import React from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import TaskBox from './TaskBox'
import { Text } from '@react-three/drei'
import TaskBoxText from './TaskBoxText'


function StakTaskNames({ tasks }) {
  return (
    <>
      {tasks.map((task) => (
        <TaskBoxText
          key={task.id}
          position={task.position}
          name={task.name}
          color={task.color}
        />
      ))}
    </>
  )
}

export default StakTaskNames
