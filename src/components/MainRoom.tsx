import { Html } from "@react-three/drei";
import HoveringAvatar from "./Avatar";
import { ContactMe } from "./ContactMe";
import { useRoomStore } from "../store/useRoomStore";

export default function MainRoom() {
  const setRoom = useRoomStore((s) => s.setRoom);

  return (
    <>
      <mesh position={[0, 0, 4]}>
        <cylinderGeometry args={[1, 1, 2, 32]} />
        <meshStandardMaterial color="#555" />
      </mesh>
      <HoveringAvatar />

      <Html position={[0, 3.5, 3.1]} center transform>
        <div
          style={{
            background: "#111",
            color: "#0ff",
            padding: "12px 24px",
            borderRadius: "12px",
            fontSize: "16px",
            fontWeight: "bold",
            boxShadow: "0 0 16px #0ff",
            fontFamily: "sans-serif",
            textAlign: "center",
          }}
        >
          This is a 3D Resume of Anantha Krishnan G – Software Developer from
          Chennai
        </div>
      </Html>

      <mesh position={[-3, 2, 3.1]} onClick={() => setRoom("personal")}>
        <boxGeometry args={[1.2, 0.6, 0.1]} />
        <meshStandardMaterial color="lightgreen" />
        <Html center position={[0, 0, 0.1]}>
          <div style={{ color: "black", fontWeight: "bold" }}>Personal</div>
        </Html>
      </mesh>

      <mesh position={[3, 2, 3.1]} onClick={() => setRoom("professional")}>
        <boxGeometry args={[1.2, 0.6, 0.1]} />
        <meshStandardMaterial color="lightgreen" />
        <Html center position={[0, 0, 0.1]}>
          <div style={{ color: "black", fontWeight: "bold" }}>Professional</div>
        </Html>
      </mesh>

      <ContactMe />
    </>
  );
}
