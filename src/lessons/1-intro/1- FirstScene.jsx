import { Canvas } from '@react-three/fiber';

function FirstScene() {
  return (
    <>
      {/* Anything provided by R3F interpretor is called in camelcase */}

      {/* 
        To set properties of the mesh (scale, rotation, position), provide values as props in the <mesh/> tag
        This is the same as: mesh.scale.set(1,2,3) in vanilla Three.js

        If all values are the same, you can pass a single value w/o the array: scale={[1,1,1]} === scale={1}

        You can also only target a specific axes of an attribute by adding a "-" between the attribute and axes
                                                                                    Ex: rotation-y={Math.PI / 4}
      */}
      <mesh position={[2, 0, 0]} scale={1.5} rotation-y={Math.PI / 4}>
        {/* 
          Provided meshes, materials are given default parameters
          To provide custom parameters, pass values as prop called "args"
          Parameter values must be provided in an array. Ex: args={ [1, 1, 1] }
          Values provided in args array follow the same order as constructing in vanilla Three.js 
                                                              Ex: new THREE.SphereGeometry(1,1,1)
        */}
        <boxGeometry args={[1, 2, 1]} />
        {/* 
          Instead of setting everything inside args Ex: args={[{color: 'mediumpurple', wireframe: true}]}, 
          you can pass attribute values as props 
        */}
        <meshBasicMaterial color='mediumpurple' wireframe />
      </mesh>
    </>
  );
}

export default function FirstSceneCanvas() {
  return (
    // Many R3F hooks must only be called inside a R3F provided Canvas component
    <Canvas>
      <FirstScene />
    </Canvas>
  );
}
