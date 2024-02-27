import { Canvas } from "@react-three/fiber";
import Sun from "./Sun.tsx";
import ModelGlb from "./ModelGlb.tsx";
import { Suspense } from "react";

function App() {
  return (
    <>
      <h1>Test R3F</h1>
      <div
        style={{
          width: "90vw",
          height: "90vh",
        }}
      >
        <Canvas>
          <ambientLight intensity={Math.PI / 2} />
          <spotLight
            position={[10, 10, 10]}
            angle={0.15}
            penumbra={1}
            decay={0}
            intensity={Math.PI}
          />
          <pointLight
            position={[-10, -10, -10]}
            decay={0}
            intensity={Math.PI}
          />
          <Suspense>
            <ModelGlb position={[0, 0, 0]} scale={[0.25, 0.25, 0.25]} />
          </Suspense>
          <Sun position={[0, 1.5, 0]} />
        </Canvas>
      </div>
    </>
  );
}

export default App;
