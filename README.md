# 🧠 Anantha Krishnan G - 3D Resume Portfolio

Welcome to my interactive **3D Resume Portfolio** built with **React Three Fiber**!  
This is an experimental project - just experimenting on ThreeJS (with 3D Games in the roadmap).
This immersive 3D experience showcases my **personal and professional profile** in a gallery-style layout, with interactive navigation and animations.

🌐 **Live Demo**: [ak3dportfolio.netlify.app](https://ak3dportfolio.netlify.app)

---

## 🎨 Features

- 🏠 **Main Room**  
  Displays a 3D avatar and interactive navigation to explore personal and professional rooms.

- 🧍 **Personal Room**  
  Contains a summary, a detailed skillset display, and languages known. The content is styled as terminal-like "TV panels" for a retro-tech vibe.

- 💼 **Professional Room**  
  Showcases 3 detailed work experiences in a terminal-like panel.

- 📞 **Contact Me Panel**  
  Accessible from the main room, shows contact details including email, phone, and LinkedIn in a modal window.

- 🎥 **Camera Controls**
  - **Rotate**: *Click & drag*
  - **Pan**: *Hold CTRL + drag*
  - **Zoom**: *Disabled for focused view*

---

## 🛠 Tech Stack

- ReactJS, Typescript, Javascript
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) for 3D rendering
- [@react-three/drei](https://github.com/pmndrs/drei) for helpers like `Html` and `OrbitControls`
- Zustand for global state management (room switching)
- Netlify for deployment

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/yourusername/3d_portfolio.git
cd 3d_portfolio

# Install dependencies
npm install

# Start development server
npm run start
