import { Html } from "@react-three/drei";
import { useState } from "react";
import "./Modal.css";

export const ContactMe = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <group>
      <Html position={[1, 2.2, 4]}>
        <div
          onClick={() => setShowModal(true)}
          style={{
            padding: "8px 16px",
            background: "#ffeb3b",
            borderRadius: "10px",
            fontWeight: "bold",
            cursor: "pointer",
            animation: "float 2s ease-in-out infinite",
          }}
        >
          Contact Me
        </div>
      </Html>

      {showModal && <ContactUsModal onClose={() => setShowModal(false)} />}
    </group>
  );
};

export function ContactUsModal({ onClose }: { onClose: () => void }) {
  return (
    <Html position={[-6, 2.2, 4]}>
      <div className="modal-backdrop">
        <div className="modal-box">
          <div>Contact Me</div>
          <div>📞 +91-8072616117</div>
          <div>📧 ananthu0601@gmail.com</div>
          <div>🔗 LinkedIn: https://www.linkedin.com/in/ak-laivann</div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Html>
  );
}
