import "./App.css";
import { Canvas } from "@react-three/fiber";
import Experience from "./components/Experience";
import Configurator from "./components/Configurator";
import { CustomizationProvider } from "./contexts/Customization";

import React, { Suspense } from "react";

function App() {
  return (
    <CustomizationProvider>
      <div className="App">
        {/* 🔥 標題固定在畫面頂部 */}
        <div className="title-overlay">
          BUILD YOUR PISTOL2
        </div>

        <Canvas dpr={[1, 2]}>
          <color attach="background" args={["#213547"]} />
          <fog attach="fog" args={["#213547", 0.005, 1]} />
           <Suspense fallback={null}>
                <Experience />
              </Suspense>
        </Canvas>

        <Configurator />
      </div>
    </CustomizationProvider>
  );
}

export default App;