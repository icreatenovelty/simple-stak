import * as THREE from 'three'
import { ReactDOM } from 'react-dom'
import React, { useRef, useState, useEffect, useMemo } from 'react'
import { Canvas, useFrame } from 'react-three-fiber'
import { OrbitControls, Text, Billboard } from '@react-three/drei'
import './styles.css'
// import Box from './components/Box.js';
import Stak from './components/Stak.js'
import TaskBox from './components/TaskBox.js'
import TaskBoxText from './components/TaskBoxText'
import StakTaskNames from './components/StakTaskNames'

var renderer = new THREE.WebGLRenderer()

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

function Plane() {
   return (
      // mesh comes from R3F
      <>
         <mesh position={[0, -0.1, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[100, 100]} />
            <meshLambertMaterial attach='material' color='gainsboro' />
         </mesh>
         <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
            <planeBufferGeometry attach='geometry' args={[2.5, 2.5]} />
            <meshLambertMaterial attach='material' color='lightblue' />
         </mesh>
      </>
   )
}

// CSS style for html elements
const overlayStyle = {
   position: 'absolute',
   display: 'block',
   zIndex: '99',
   left: '5px',
}

function App() {
   const [stak, updateStak] = useState(firstStak)
   const [nextColor, updateNextColor] = useState(3)

   // dynamic 3D stack title
   const StackTitle = () => {
      return (
         // mesh comes from R3F
         <mesh position={[0, stak.length * 0.4 + 0.5, 0]}>
            <boxBufferGeometry attach='geometry' args={[0.01, 0.6, 0.01]} />
            <meshLambertMaterial attach='material' color='black' />
            <Billboard
               position={[0, 0.5, 0]}
               follow={true}
               lockX={false}
               lockY={false}
               lockZ={false} // Lock the rotation on the z axis (default=false)
            >
               <Text fontSize={0.3}>
                  Stack Title
                  <meshStandardMaterial
                     attach='material'
                     color='black'
                     opacity={1}
                  />
               </Text>
            </Billboard>
         </mesh>
      )
   }

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
      updateStak(stak.slice(0, -1))
      if (stak.length > 0 && nextColor === 0) {
         updateNextColor(colors.length - 1)
      } else if (stak.length === 0) {
         updateNextColor(0)
      } else {
         updateNextColor((nextColor - 1) % colors.length)
      }
   }

   const camera1 = { fov: 45, near: 0.1, far: 1000, position: [5, 5, 5] }

   // does not work to update camera position:
   // camera1.position = [5,5,5]

   const moveCamera = () => {
      camera1.position = [0, 0, 0]
   }

   return (
      <>
         <p style={{ ...overlayStyle, color: 'black' }}>this my stak:</p>
         <button
            onClick={addTask}
            style={{
               ...overlayStyle,
               top: '50px',
               backgroundColor: 'orangered',
            }}
            className='btn'
         >
            Add Block
         </button>
         <button
            onClick={removeTop}
            style={{
               ...overlayStyle,
               top: '70px',
               backgroundColor: 'red',
            }}
            className='btn'
         >
            Remove Block
         </button>
         <button
            onClick={moveCamera}
            style={{
               ...overlayStyle,
               top: '90px',
               backgroundColor: 'green',
            }}
            className='btn'
         >
            Move Camera
         </button>
         <Canvas camera={camera1}>
            <OrbitControls />
            <ambientLight intensity={0.5} />
            <spotLight position={[-10, 15, 10]} angle={0.3} />
            <Stak tasks={stak} />
            <StakTaskNames tasks={stak} />
            <StackTitle />
            <Plane />
         </Canvas>
      </>
   )
}

export default App
