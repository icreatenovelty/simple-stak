import React from 'react';
import { Canvas, useFrame } from 'react-three-fiber';

function Box({ height, color }) {
  return (
    // mesh comes from R3F
    <mesh position={[0, height, 0]}>
      <boxBufferGeometry attach="geometry" args={[1, 0.3, 1]}/>
      <meshLambertMaterial attach="material" color={color} />
    </mesh>
  );
}

export default Box;