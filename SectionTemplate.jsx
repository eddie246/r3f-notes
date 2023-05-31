import { Canvas } from '@react-three/fiber';

function OrbitControls() {
  return (
    <>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default function OrbitControlsCanvas() {
  return (
    <Canvas>
      <OrbitControls />
    </Canvas>
  );
}
