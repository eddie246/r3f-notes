import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

function LightsIntro() {
  const groupRef = useRef();
  const cubeMeshRef = useRef();

  useFrame((_, delta) => {
    cubeMeshRef.current.rotation.y += delta;
  });

  return (
    <>
      {/* Lights can be delcared like so: */}
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={0.5} />

      <group position-y={-1} ref={groupRef}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>

        <mesh
          ref={cubeMeshRef}
          rotation-y={Math.PI / 4}
          position-x={2}
          scale={1.5}
        >
          <boxGeometry />
          <meshStandardMaterial color='mediumpurple' />
        </mesh>
      </group>
      <mesh position-y={-2} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
}

export default function LightsIntroCanvas() {
  return (
    <Canvas>
      <LightsIntro />
    </Canvas>
  );
}
