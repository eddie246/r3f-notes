import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';

function Animate() {
  /*
    The scene is already being drawn on each frame, there's just no movement

    We can animate the cube by using a R3F Hook: useFrame
  */

  const groupRef = useRef();
  const cubeMeshRef = useRef();

  useFrame((_, delta) => {
    // To Animate, DO NOT change the attributes by listening on a state and changing the state in useFrame hook
    // This causes everything in component to rerender (in Three.js, this means destroying and recreating mesh/material/geometry)

    // Instead, grab the ref and set its attributes on each frame
    cubeMeshRef.current.rotation.y += 0.0001;

    // Since this callback is being called on each frame, higher refresh rate will call this function more
    // This means to ensure similar experience on all devices, we can use delta time instead of set value on each frame
    // The delta is automatically passed as the second parameter

    cubeMeshRef.current.rotation.y += delta;
    groupRef.current.rotation.y += delta;
  });

  return (
    <>
      {/* Everything inside a group tag is added to the group */}
      <group ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshBasicMaterial color='orange' />
        </mesh>

        <mesh
          ref={cubeMeshRef}
          rotation-y={Math.PI / 4}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshBasicMaterial color='mediumpurple' />
        </mesh>
      </group>

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshBasicMaterial color='greenyellow' />
      </mesh>
    </>
  );
}

export default function AnimateCanvas() {
  return (
    <Canvas>
      <Animate />
    </Canvas>
  );
}
