import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function OrbitControlsDrei() {
  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={0.5} />

      <group position-y={-1}>
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>

        <mesh position-x={2} scale={1.5}>
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

export default function OrbitControlsDreiCanvas() {
  return (
    <Canvas>
      <OrbitControlsDrei />
      {/* Call the drei Orbit Controls like so: */}
      <OrbitControls
      // enableDamping={false} // Camera move damping
      />
    </Canvas>
  );
}
