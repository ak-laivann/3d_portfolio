import { Html } from "@react-three/drei";
import { useRoomStore } from "../store/useRoomStore";

export default function ProfessionalRoom() {
  const setRoom = useRoomStore((s) => s.setRoom);
  return (
    <>
      <Html position={[0, 2.5, 3.1]} transform>
        <div
          style={{
            width: 800,
            maxHeight: 400,
            overflowY: "auto",
            background: "#fff",
            border: "2px solid #444",
            padding: "16px",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            fontFamily: "Arial, sans-serif",
          }}
        >
          <h2 style={{ textAlign: "center", marginBottom: "12px" }}>
            Work Experience
          </h2>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "4px" }}>
              Software Developer | Marina Labs (May 2025 - Present)
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px" }}>
              <li>
                Built a MERN Stack app to analyze DNA sequences and visualize
                results.
              </li>
              <li>Used Redis + BullMQ for managing genomic background jobs.</li>
              <li>
                Integrated third-party tools for genome analysis and charting.
              </li>
              <li>
                Built REST APIs for DNA submission, job tracking, and results.
              </li>
            </ul>
            <p style={{ fontSize: "13px", marginTop: "6px" }}>
              <strong>Skills:</strong> MERN, TypeScript, D3.js, Python, Redis,
              BullMQ, QIIME
            </p>
          </div>

          <div style={{ marginBottom: "20px" }}>
            <h3 style={{ marginBottom: "4px" }}>
              Project Engineer | Tube Investments of India (Jan 2024 - Apr 2025)
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px" }}>
              <li>
                Developed a Spares & Audit Tracking System reducing manual work
                by 60%.
              </li>
              <li>Implemented Excel export, enabling raw data workflows.</li>
              <li>
                Used Python & Java scripts for Excel analytics, cutting 24hr
                effort to minutes.
              </li>
              <li>Built live audit tracking module with role-based access.</li>
              <li>
                Reduced safety incidents by 20% via responsibility delegation.
              </li>
            </ul>
            <p style={{ fontSize: "13px", marginTop: "6px" }}>
              <strong>Skills:</strong> MERN, TypeScript, AntDesign, Python,
              Kotlin
            </p>
          </div>

          <div style={{ marginBottom: "10px" }}>
            <h3 style={{ marginBottom: "4px" }}>
              Software Developer | InterviewDesk (Nov 2022 - Jan 2024)
            </h3>
            <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px" }}>
              <li>Built a Scheduler Service automating interviews & slots.</li>
              <li>Led job profile module with AI-based search (GCP APIs).</li>
              <li>
                Built Engagement Module with in-app mailbox (AWS Pinpoint, SES,
                SNS).
              </li>
              <li>Created AI Accessor wrapper for seamless AI integration.</li>
              <li>Introduced a reusable UI framework, cutting code by 80%.</li>
              <li>Achieved 90%+ test coverage (Jest, RTL, JUnit).</li>
              <li>Mentored interns and developers to ensure delivery.</li>
            </ul>
            <p style={{ fontSize: "13px", marginTop: "6px" }}>
              <strong>Skills:</strong> React, TypeScript, AntDesign, OpenAI,
              GCP, AWS, Jest, RTL, JUnit, Java, Kotlin
            </p>
          </div>
        </div>
      </Html>

      {/* Button to go back */}
      <Html position={[12, 2, 5]} transform>
        <button
          onClick={() => setRoom("main")}
          style={{
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: 4,
          }}
        >
          Go to Main
        </button>
      </Html>
    </>
  );
}
