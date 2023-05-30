import { Canvas, useFrame } from '@react-three/fiber';

import { CineonToneMapping } from 'three';

function CanvasSettings() {
  // To animate camera, you can grab its instance from useFrame
  useFrame(({ camera, clock }, delta) => {
    // Animate like native Three js
    const elapsedTime = clock.elapsedTime / 5;
    camera.position.x = Math.sin(elapsedTime) * 8;
    camera.position.z = Math.cos(elapsedTime) * 8;

    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <directionalLight position={[1, 2, 3]} intensity={1.5} />
      <ambientLight intensity={0.5} />

      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>

      <mesh position-y={-2} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='yellowgreen' />
      </mesh>
    </>
  );
}

export default function CanvasSettingsCanvas() {
  // To change settings on the canvas, camera, or renderer, you can pass settings as props
  return (
    <Canvas
      dpr={[1, 2]} // Forces pixel ratio between 1 - 2. Pass a single value if you want to force it to a value
      // flat // Removes tone mapping from ACESFilmicToneMapping and sets as LinearToneMapping
      orthographic // Changes to use orthographic camera
      camera={{
        fov: 45,
        zoom: 80,
        near: 0.01,
        far: 200,
        position: [3, 2, 6],
      }}
      gl={
        {
          // antialias: false,
          // toneMapping: CineonToneMapping,
        }
      }
    >
      <CanvasSettings />
    </Canvas>
  );
}
