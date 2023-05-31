import { OrbitControls, TransformControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

function TransformControlsDrei() {
  const sphereMeshRef = useRef();

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={0.5} />

      {/* Creates a gizmo on element its wrapping. 
      Two Bugs:
        1. Will not be centered by default since its being called at first and the mesh is called at x=2 */}
      <TransformControls
        position-x={2} // First method to fix offset, position must be removed from mesh
      >
        <mesh
          // position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>
      </TransformControls>

      {/* Second method of fixing: using a ref on the mesh and passing the ref to the <TransformControls /> */}
      <mesh ref={sphereMeshRef} position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>

      <TransformControls
        object={sphereMeshRef}
        mode='scale' // Changes the mode to scale instead of translate, can have translate, scale, rotate
      />

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
}

export default function TransformControlsDreiCanvas() {
  return (
    <Canvas>
      <TransformControlsDrei />
      {/* Second Bug: Clicking TransformControls will move camera as well because of OrbitControls.
      Passing makeDefault will disable orbiting automatically when needed */}
      <OrbitControls makeDefault />
    </Canvas>
  );
}
