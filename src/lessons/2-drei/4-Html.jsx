import { css } from '@emotion/css';
import { OrbitControls, Html } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { useRef } from 'react';

// Docs: https://github.com/pmndrs/drei#html

function HtmlDrei() {
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
        {/* Can be added to mesh, group or anything that inherits Object3D */}
        <Html
          position={[0, 1.5, 0]}
          // Allows you to style the html
          wrapperClass={css`
            div {
              font-family: Helvetica, Arial;
              position: absolute;
              background: #00000088;
              color: white;
              padding: 15px;
              white-space: nowrap;
              overflow: hidden;
              border-radius: 30px;
              user-select: none;
            }
          `}
          center // Centers the anchor point of the html
          distanceFactor={8} // Adds perspective
          occlude={[sphereMeshRef, cubeMeshRef]} // Allows meshes to hide when infront. Pass array of refs.
        >
          That's a sphere
        </Html>
      </mesh>

      <mesh position-y={-1} rotation-x={-Math.PI / 2} scale={10}>
        <planeGeometry />
        <meshStandardMaterial color='greenyellow' />
      </mesh>
    </>
  );
}

export default function HtmlCanvas() {
  return (
    <Canvas>
      <HtmlDrei />
      <OrbitControls makeDefault />
    </Canvas>
  );
}
