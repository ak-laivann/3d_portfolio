import { Html } from "@react-three/drei";
import { useRoomStore } from "../store/useRoomStore";

const skills = [
  "Java",
  "Kotlin",
  "Javascript",
  "Typescript",
  "SQL",
  "BashScript",
  "HTML5/CSS3",
  "Python",
  "React",
  "NodeJS",
  "ExpressJS",
  "VueJS",
  "Flutter",
  "React Query",
  "Ant Design",
  "BullMQ",
  "React Testing Library",
  "Jest",
  "JUnit",
  "Jacoco",
  "AWS DynamoDB",
  "AWS S3",
  "MongoDB",
  "Firebase",
  "Redis",
  "AWS CodeCommit",
  "AWS Amplify",
  "AWS Cognito",
  "AWS CodePipeline",
  "AWS CloudWatch",
  "AWS Lambda",
  "AWS StepFunctions",
  "AWS SNS",
  "AWS SES",
  "AWS SQS",
  "AWS Pinpoint",
  "AWS DLQ",
  "AWS Opensearch",
  "AWS Codebuild",
  "AWS IAM",
  "AWS CodeArtifact",
  "AWS API Gateway",
  "AWS EventBridge",
  "GCP ML Based Job Search API",
  "Azure OpenAI API",
  "Render",
  "Netlify",
  "Git",
  "Github",
  "Gradle",
  "NPM",
  "Linux",
  "Postman",
  "SEToolkit",
  "Generative-AI",
  "Problem-Solving",
  "Logical Reasoning",
  "Front End Development",
  "Back End Development",
  "Full Stack Development",
  "RESTful",
  "JSON",
  "CICD",
  "Microservice",
  "Monorepo",
  "Micro Frontends",
  "Object Oriented Programming",
  "Leadership",
  "Team work",
  "Public Speaking",
  "Trouble Shooting",
];

const languagesKnown = [
  "❖ TAMIL, TELUGU (NATIVE)",
  "❖ ENGLISH, HINDI (PROFESSIONAL)",
  "❖ MARATI, GERMAN, JAPANESE (BEGINNER)",
];

export default function PersonalRoom() {
  const setRoom = useRoomStore((s) => s.setRoom);

  return (
    <>
      <Html position={[6, 5, 3.1]} transform>
        <div
          style={{
            background: "black",
            color: "white",
            padding: 12,
            width: 400,
            borderRadius: 8,
            boxShadow: "0 0 20px #0f0",
          }}
        >
          <h3 style={{ color: "#0f0", marginBottom: 8 }}>Summary</h3>
          <p>
            Highly motivated Engineering aspirant with demonstrated ability to
            learn and apply in new technical areas, work collaboratively in a
            team environment, good communication and make original contributions
            to engineering sciences.
          </p>
        </div>
      </Html>

      <Html position={[-7, 3, 3.21]} transform>
        <div
          style={{
            width: 500,
            height: 300,
            overflowY: "scroll",
            backgroundColor: "#111",
            color: "#0f0",
            padding: 12,
            fontFamily: "monospace",
            borderRadius: 8,
            boxShadow: "0 0 20px #0f0",
          }}
        >
          <h3 style={{ marginBottom: 8, color: "#0f0" }}>Skillset</h3>
          <ul style={{ columns: 2, margin: 0, paddingLeft: 20 }}>
            {skills.map((skill) => (
              <li key={skill} style={{ marginBottom: 4 }}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </Html>

      <Html position={[6, 0, 3.1]} transform>
        <div
          style={{
            width: 450,
            backgroundColor: "#111",
            color: "#0f0",
            padding: 16,
            fontFamily: "monospace",
            borderRadius: 8,
            boxShadow: "0 0 20px #0ff",
          }}
        >
          <h3 style={{ marginBottom: 8, color: "#0ff" }}>Languages Known</h3>
          <ul style={{ margin: 0, paddingLeft: 20 }}>
            {languagesKnown.map((lang, i) => (
              <p key={i} style={{ marginBottom: 6 }}>
                {lang}
              </p>
            ))}
          </ul>
        </div>
      </Html>

      {/* Button to go back */}
      <Html position={[13, 3, 3.1]} transform>
        <button
          onClick={() => setRoom("main")}
          style={{
            padding: "10px",
            background: "blue",
            color: "white",
            border: "none",
            borderRadius: 4,
            fontWeight: "bold",
            boxShadow: "0 0 12px blue",
          }}
        >
          Go to Main
        </button>
      </Html>
    </>
  );
}
