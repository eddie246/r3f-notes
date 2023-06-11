import { OrbitControls, Text, Float } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

// Docs: https://github.com/pmndrs/drei#float

function FloatDrei() {
  const sphereMeshRef = useRef();
  const cubeMeshRef = useRef();

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={0.5} />

      <mesh scale={1.5} position-x={2} ref={cubeMeshRef}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
      </mesh>

      <mesh ref={sphereMeshRef} position-x={-2}>
        <sphereGeometry />
        <meshStandardMaterial color='orange' />
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>

      {/* Anything inside has a floating animation */}
      <Float speed={5} floatIntensity={2}>
        <Text
          font='/bangers-v20-latin-regular.woff'
          fontSize={1}
          color='salmon'
          position-y={2}
          maxWidth={2}
          textAlign='center'
        >
          HELLO WORLD!
          <meshNormalMaterial />
        </Text>
      </Float>
    </>
  );
}

export default function FloatCanvas() {
  return (
    <Canvas>
      <FloatDrei />
      <OrbitControls makeDefault />
    </Canvas>
  );
}
