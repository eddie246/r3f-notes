import { Canvas, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame, extend } from '@react-three/fiber';

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// To use OrbitControls, it must be imported seperately from the rest of the THREE library. (Same as vanilla Three.js)
// Extend allows you to turn anything into a R3F tag (similar to <mesh/>) and be used declaritively
extend({ OrbitControls });

function OrbitControlsManual() {
  const groupRef = useRef();
  const cubeMeshRef = useRef();

  useFrame((_, delta) => {
    cubeMeshRef.current.rotation.y += delta;
  });

  // useThree hook provides access to many Three js objects ie camera, render, etc
  // Since the vanilla orbitControls needs a reference to the camera + canvas DOM element, we extract + provide those
  const { camera, gl: webGLrenderer } = useThree();

  return (
    <>
      <orbitControls args={[camera, webGLrenderer.domElement]} />

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

export default function OrbitControlsCanvas() {
  return (
    <Canvas>
      <OrbitControlsManual />
    </Canvas>
  );
}
