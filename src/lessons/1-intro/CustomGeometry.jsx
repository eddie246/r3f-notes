import { Canvas } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { DoubleSide } from 'three';

function CustomGeometry() {
  // Creating custom geometry is similar to vanilla Threejs

  // Create a float32Array and fill it with random numbers
  const VERTICIES_COUNT = 10 * 3;
  const positions = new Float32Array(VERTICIES_COUNT * 3);

  for (let i = 3; i < VERTICIES_COUNT * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 2;
  }

  // The Normals are not set after creating this custom geometry. Everything appears black even though theres light
  // We can calculate the normals by calling .computeVertexNormals() on the mesh

  const geometryRef = useRef();

  useEffect(() => {
    geometryRef.current.computeVertexNormals();
  }, []);

  return (
    <>
      <directionalLight position={[1, 2, 3]} />
      <ambientLight intensity={0.5} />
      <mesh>
        {/* Create a buffer geometry and provide childrens */}
        <bufferGeometry ref={geometryRef}>
          {/* Attach basically adds the buffer attribute to the geometry ie. geometry.attribute.position */}
          <bufferAttribute
            attach='attributes-position'
            count={VERTICIES_COUNT}
            itemSize={3}
            array={positions}
          />
        </bufferGeometry>
        <meshStandardMaterial color='red' side={DoubleSide} />
      </mesh>
    </>
  );
}

export default function CustomGeometryCanvas() {
  return (
    <Canvas>
      <CustomGeometry />
    </Canvas>
  );
}
