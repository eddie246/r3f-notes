import { OrbitControls, PivotControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

// Docs: https://github.com/pmndrs/drei#pivotcontrols

function PivotControlsDrei() {
  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1} />
      <ambientLight intensity={0.5} />

      <mesh scale={1.5} position-x={2}>
        <boxGeometry />
        <meshStandardMaterial color='mediumpurple' />
      </mesh>

      {/* Much better looking controls + has all controls: translate, rotate, scale */}
      <PivotControls
        anchor={[0, 0, 0]} // Anchor attr allows you to center. Are not coords in units, are relative values
        depthTest={false} // Will always be drawn on top, will not be hidden by mesh in scene
        // Customization
        lineWidth={4}
        axisColors={['#9381ff', '#fd5070', '#7ae582']}
        scale={200}
        fixed // Makes controls orthographic
      >
        <mesh position-x={-2}>
          <sphereGeometry />
          <meshStandardMaterial color='orange' />
        </mesh>
      </PivotControls>

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
}

export default function PivotControlsDreiCanvas() {
  return (
    <Canvas>
      <PivotControlsDrei />
      <OrbitControls makeDefault />
    </Canvas>
  );
}
