import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera } from "@react-three/drei";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Canvas>
      <OrthographicCamera makeDefault zoom={40} />
      {/* <gridHelper args={[100, 100, `white`, `gray`]} /> */}
      <App />
    </Canvas>
  </StrictMode>
);
