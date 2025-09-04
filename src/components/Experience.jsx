







import React, { Suspense } from "react";
import {
  MeshReflectorMaterial,
  PresentationControls,
  Stage,
  Float,
} from "@react-three/drei";
import { BaseGun1 } from "./BaseGun1";

const Experience = () => {
  return (
    <PresentationControls
      speed={1.5}
      global
      polar={[-0.1, Math.PI / 4]}
      rotation={[Math.PI / 8, Math.PI / 2, 0]}
    >
      <Stage environment="city" intensity={0.6} castShadow={false} shadows={false}>
       
          <Float
            speed={1.5}
            rotationIntensity={1}
            floatIntensity={1}
            floatingRange={[0, 0.01]}
          >
            <BaseGun1 position={[0, -0.03, 0]} rotation={[-0.3, 0, 0]} scale={1} />
          </Float>
       
      </Stage>

      {/* 地面反射 */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.3}>
        <planeGeometry args={[170, 170]} />
        <MeshReflectorMaterial
          blur={[300, 100]}
          resolution={2048}
          mixBlur={1}
          mixStrength={40}
          roughness={1}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color="#101010"
          metalness={0.5}
        />
      </mesh>
    </PresentationControls>
  );
};

export default Experience;












// import React, { Suspense } from "react";
// import {
//   MeshReflectorMaterial,
//   PresentationControls,
//   Stage,
//   Float,
// } from "@react-three/drei";
// import { BaseGun } from "./BaseGun";

// const Experience = () => {
//   return (
//     <PresentationControls
//       speed={1.5}
//       global
//       polar={[-0.1, Math.PI / 4]}
//       rotation={[Math.PI / 8, Math.PI / 4, 0]}
//     >
//       <Stage environment="city" intensity={0.6} castShadow={false}>
//         <Suspense fallback={null}>
//           <Float
//             speed={1}
//             rotationIntensity={1}
//             floatIntensity={1}
//             floatingRange={[0, 0.01]}
//           >
//             <BaseGun scale={1} />
//           </Float>
//         </Suspense>
//       </Stage>

//       {/* 地面反射 */}
//       <mesh rotation={[-Math.PI / 2, 0, 0]} position-y={-0.1}>
//         <planeGeometry args={[170, 170]} />
//         <MeshReflectorMaterial
//           blur={[300, 100]}
//           resolution={2048}
//           mixBlur={1}
//           mixStrength={40}
//           roughness={1}
//           depthScale={1.2}
//           minDepthThreshold={0.4}
//           maxDepthThreshold={1.4}
//           color="#101010"
//           metalness={0.5}
//         />
//       </mesh>
//     </PresentationControls>
//   );
// };

// export default Experience;
