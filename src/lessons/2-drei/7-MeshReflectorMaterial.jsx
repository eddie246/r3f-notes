import {
  OrbitControls,
  Text,
  Float,
  MeshReflectorMaterial,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

// DOCS: https://github.com/pmndrs/drei#meshreflectormaterial

function MeshReflectorMaterialDrei() {
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

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        {/* Does not work well with non-planer meshes */}
        <MeshReflectorMaterial
          blur={[300, 50]}
          resolution={512}
          mixBlur={1}
          mixStrength={2}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color='greenyellow'
          metalness={0.5}
        />
      </mesh>
    </>
  );
}

export default function MeshReflectorMaterialCanvas() {
  return (
    <Canvas>
      <MeshReflectorMaterialDrei />
      <OrbitControls makeDefault />
    </Canvas>
  );
}
