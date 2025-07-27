import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export default function HoveringAvatar() {
  const avatarRef = useRef<Mesh>(null!);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    // sine operation so that i can get up and down motion
    avatarRef.current.position.y = Math.sin(t) * 0.2 + 2;
  });

  return (
    <mesh ref={avatarRef} position={[0, 1.5, 4]}>
      <sphereGeometry args={[0.5, 32, 32]} />
      <meshStandardMaterial color="hotpink" />
    </mesh>
  );
}
