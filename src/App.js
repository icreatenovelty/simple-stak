import React, { useRef, useState, useMemo } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls } from '@react-three/drei'
import './styles.css'
// import Box from './components/Box.js';
import TaskBox from './components/TaskBox.js'
import Stak from './components/Stak.js'

const firstStak = [
  {
    id: 0,
    position: 1,
    name: 'Learn Spanish',
    color: 'red',
  },
  {
    id: 1,
    position: 2,
    name: 'Work Out',
    color: 'orange',
  },
  {
    id: 2,
    position: 3,
    name: 'Juggling',
    color: 'yellow',
  },
]

var colors = [
  'red',
  'orange',
  'yellow',
  'lightgreen',
  'lightskyblue',
  'mediumslateblue',
  'orchid',
]

var colorCount = colors.length

function Plane() {
  return (
    // mesh comes from R3F
    <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
      <planeBufferGeometry attach="geometry" args={[100, 100]} />
      <meshLambertMaterial attach="material" color="lightblue" />
    </mesh>
  )
}

function App() {
  const [stak, updateStak] = useState(firstStak)
  const [nextColor, updateNextColor] = useState(3)

  const addTask = () => {
    const newTask = {
      id: stak.length,
      position: stak.length + 1,
      name: 'new task',
      color: colors[nextColor],
    }
    updateNextColor((nextColor + 1) % colors.length)
    updateStak([...stak, newTask])
  }

  const removeTop = () => {
    updateStak(stak.slice(0,-1))
  }

  return (
    <>
      <p style={{ color: 'grey' }}>dis my stak:</p>
      <button
        onClick={addTask}
        style={{ backgroundColor: 'orangered' }}
        className="btn"
      >
        Add Block
      </button>
      <button
        onClick={removeTop}
        style={{ backgroundColor: 'red' }}
        className="btn"
      >
        Remove Block
      </button>
      <Canvas>
        <OrbitControls />
        <ambientLight intensity={0.5} />
        <spotLight position={[-10, 15, 10]} angle={0.3} />
        <Stak tasks={stak} />
        <Plane />
      </Canvas>
    </>
  )
}

export default App
