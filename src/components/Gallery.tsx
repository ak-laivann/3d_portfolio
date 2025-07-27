import { useRoomStore } from "../store/useRoomStore";
import MainRoom from "./MainRoom";
import PersonalRoom from "./PersonalRoom";
import ProfessionalRoom from "./ProfessionalRoom";

export default function Gallery() {
  const { currentRoom } = useRoomStore();

  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.15, 4]}>
        <planeGeometry args={[30, 30]} />
        <meshStandardMaterial color="#b0bec5" roughness={0.8} metalness={0.1} />
      </mesh>

      <mesh position={[0, 2.5, 0]}>
        <boxGeometry args={[30, 10, 5]} />
        <meshStandardMaterial color="#cfd8dc" roughness={0.6} metalness={0.2} />
      </mesh>

      {currentRoom === "main" && <MainRoom />}
      {currentRoom === "personal" && <PersonalRoom />}
      {currentRoom === "professional" && <ProfessionalRoom />}
    </>
  );
}
