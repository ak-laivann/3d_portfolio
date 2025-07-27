import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useRoomStore } from "./store/useRoomStore";
import Gallery from "./components/Gallery";

function App() {
  const room = useRoomStore((s) => s.currentRoom);

  const sceneScale = room !== "main" ? 0.6 : 1;

  return (
    <Canvas camera={{ position: [0, 4, 12], fov: 50 }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />

      <group scale={[sceneScale, sceneScale, sceneScale]}>
        <Gallery />
      </group>

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}

export default App;
