import { Canvas } from '@react-three/fiber';

function Template() {
  return (
    <>
      <mesh>
        <torusKnotGeometry />
        <meshNormalMaterial />
      </mesh>
    </>
  );
}

export default function TemplateCanvas() {
  return (
    <Canvas>
      <Template />
    </Canvas>
  );
}
