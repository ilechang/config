import { useState } from "react";
import { useCustomization } from "../contexts/Customization";

const slideOptions = ["black", "gold", "silver", "red"];
const compOptions = ["none", "black", "gold", "silver", "red"];
const magwellOptions = ["none", "gold", "silver", "red"];
const thumbrestOptions = ["none", "gold", "silver", "red"];
const opticOptions = [
  { key: "none", label: "None" },
  { key: "frame", label: "Frame Mount" },
  { key: "slide", label: "Slide Mount" },
];

// 描述文字
const compDescription =
  "On an airsoft gun, the compensator is not only for aesthetics — it also allows for an extended inner barrel length (up to one inch), enhancing accuracy and shot consistency.";
const magwellDescription =
  "A flared magwell speeds up reloads by guiding the magazine into place, ensuring faster and more consistent magazine changes under pressure.";
const thumbrestDescription =
  "A thumb rest improves a gun’s stability and helps control muzzle rise, enhancing accuracy during rapid fire.";
const opticDescription =
  "Mounting a red dot sight on a handgun can improve target acquisition speed and enhance overall shooting accuracy.";

const Configurator = () => {
  const {
    slideColor,
    setSlideColor,
    compColor,
    setCompColor,
    magwellColor,
    setMagwellColor,
    thumbrestColor,
    setThumbrestColor,
    opticType,
    setOpticType,
  } = useCustomization();

  // 控制 Learn More 展開
  const [showComp, setShowComp] = useState(false);
  const [showMagwell, setShowMagwell] = useState(false);
  const [showThumbrest, setShowThumbrest] = useState(false);
  const [showOptic, setShowOptic] = useState(false);

  return (
    <div className="configurator">
      <p
        className="border-bottom pb-4"
        style={{
          color: "#fff",
          fontSize: "16px",
          marginBottom: "1rem",
          maxWidth: "100%",       // 不會超出容器
          wordWrap: "break-word", // 長字自動換行
          wordBreak: "break-word",
          textAlign: "center",
        }}
      >
        This demo showcases a pistol configurator. Choose colors and attachments
        to personalize your build.
      </p>
      {/* 區塊 1: Slide Color */}
      <div className="configurator__section">
        <div className="configurator__section__title">Slide Color</div>
        <div className="configurator__section__values">
          {slideOptions.map((color, index) => (
            <div
              key={index}
              className={`item ${slideColor === color ? "item--active" : ""}`}
              onClick={() => setSlideColor(color)}
            >
              <div
                className="item__dot"
                style={{ backgroundColor: color }}
              />
              <div className="item__label">{color}</div>
            </div>
          ))}
        </div>
      </div>

      {/* 區塊 2: Compensator */}
      <div className="configurator__section">
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <div className="configurator__section__title">Compensator</div>
          <img src="./comp.webp" alt="Compensator" className="img-fluid" style={{ maxWidth: "100px" }} />
        </div>
        <button onClick={() => setShowComp(!showComp)} className="learn-more">
          {showComp ? "Hide" : "Learn more"}
        </button>
        {showComp && <p className="description">{compDescription}</p>}

        <div className="configurator__section__values">
          {compOptions.map((color, index) => (
            <div
              key={index}
              className={`item ${compColor === color ? "item--active" : ""}`}
              onClick={() => setCompColor(color)}
            >
              {color !== "none" && (
                <div
                  className="item__dot"
                  style={{ backgroundColor: color }}
                />
              )}
              <div className="item__label">{color}</div>
            </div>
          ))}
        </div>


      </div>

      {/* 區塊 3: Magwell */}
      <div className="configurator__section">
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <div className="configurator__section__title">Flared Magwell</div>
          <img src="./magwell.webp" alt="Compensator" className="img-fluid" style={{ maxWidth: "100px" }} />
        </div>
        <button onClick={() => setShowMagwell(!showMagwell)} className="learn-more">
          {showMagwell ? "Hide" : "Learn more"}
        </button>
        {showMagwell && <p className="description">{magwellDescription}</p>}
        <div className="configurator__section__values">
          {magwellOptions.map((color, index) => (
            <div
              key={index}
              className={`item ${magwellColor === color ? "item--active" : ""}`}
              onClick={() => setMagwellColor(color)}
            >
              {color !== "none" && (
                <div
                  className="item__dot"
                  style={{ backgroundColor: color }}
                />
              )}
              <div className="item__label">{color}</div>
            </div>
          ))}
        </div>


      </div>


      {/* 區塊 4: Thumb Rest */}
      <div className="configurator__section">

        <div className="d-flex justify-content-center align-items-center mx-auto">
          <div className="configurator__section__title">Thumb Rest</div>
          <img src="./rest.webp" alt="Compensator" className="img-fluid" style={{ maxWidth: "100px" }} />
        </div>
        <button onClick={() => setShowThumbrest(!showThumbrest)} className="learn-more">
          {showThumbrest ? "Hide" : "Learn more"}
        </button>
        {showThumbrest && <p className="description">{thumbrestDescription}</p>}
        <div className="configurator__section__values">
          {thumbrestOptions.map((color, index) => (
            <div
              key={index}
              className={`item ${thumbrestColor === color ? "item--active" : ""}`}
              onClick={() => setThumbrestColor(color)}
            >
              {color !== "none" && (
                <div
                  className="item__dot"
                  style={{ backgroundColor: color }}
                />
              )}
              <div className="item__label">{color}</div>
            </div>
          ))}
        </div>


      </div>

      {/* 區塊 5: Optic */}
      <div className="configurator__section">

        <div className="d-flex justify-content-center align-items-center mx-auto">
          <div className="configurator__section__title">Optic Mount</div>
          <img src="./mount.webp" alt="Compensator" className="img-fluid" style={{ maxWidth: "100px" }} />
        </div>
        <button onClick={() => setShowOptic(!showOptic)} className="learn-more">
          {showOptic ? "Hide" : "Learn more"}
        </button>
        {showOptic && <p className="description">{opticDescription}</p>}
        <div className="configurator__section__values">
          {opticOptions.map((opt, index) => (
            <div
              key={index}
              className={`item ${opticType === opt.key ? "item--active" : ""}`}
              onClick={() => setOpticType(opt.key)}
            >
              <div className="item__label">{opt.label}</div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
};

export default Configurator;







// import { useCustomization } from "../contexts/Customization";

// const slideOptions = ["black", "gold", "silver", "red"];

// const compOptions = ["none", "black", "gold", "silver", "red"];

// const magwellOptions = ["none", "gold", "silver", "red"];

// const thumbrestOptions = ["none", "gold", "silver", "red"];

// const opticOptions = [
//   { key: "none", label: "None" },
//   { key: "frame", label: "Frame Mounted Optic" },
//   { key: "slide", label: "Slide Mounted Optic" },
// ];

// const Configurator = () => {
//   const {
//     slideColor,
//     setSlideColor,
//     compColor,
//     setCompColor,
//     magwellColor,
//     setMagwellColor,
//     opticType,
//     setOpticType,
//     thumbrestColor,
//     setThumbrestColor,
//   } = useCustomization();

//   return (
//     <div className="configurator">
//       {/* 區塊 1: 滑套顏色 */}
//       <div className="configurator__section border-bottom">
//         <div className="configurator__section__title">Slide Color</div>
//         <div className="configurator__section__values">
//           {slideOptions.map((color, index) => (
//             <div
//               key={index}
//               className={`item ${slideColor === color ? "item--active" : ""}`}
//               onClick={() => setSlideColor(color)}
//             >
//               <div
//                 className="item__dot"
//                 style={{ backgroundColor: color }}
//               />
//               <div className="item__label">{color}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 區塊 2: Compensator */}
//       <div className="configurator__section border-bottom">
//         <div className="configurator__section__title">Compensator</div>
//         <div className="configurator__section__values">
//           {compOptions.map((color, index) => (
//             <div
//               key={index}
//               className={`item ${compColor === color ? "item--active" : ""}`}
//               onClick={() => setCompColor(color)}
//             >
//               {color !== "none" && (
//                 <div
//                   className="item__dot"
//                   style={{ backgroundColor: color }}
//                 />
//               )}
//               <div className="item__label">{color}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 區塊 3: Magwell */}
//       <div className="configurator__section border-bottom">
//         <div className="configurator__section__title">Flared Magwell</div>
//         <div className="configurator__section__values">
//           {magwellOptions.map((color, index) => (
//             <div
//               key={index}
//               className={`item ${magwellColor === color ? "item--active" : ""}`}
//               onClick={() => setMagwellColor(color)}
//             >
//               {color !== "none" && (
//                 <div
//                   className="item__dot"
//                   style={{ backgroundColor: color }}
//                 />
//               )}
//               <div className="item__label">{color}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 區塊 4: Thumb Rest */}
//       <div className="configurator__section border-bottom">
//         <div className="configurator__section__title">Thumb Rest</div>
//         <div className="configurator__section__values">
//           {thumbrestOptions.map((color, index) => (
//             <div
//               key={index}
//               className={`item ${thumbrestColor === color ? "item--active" : ""}`}
//               onClick={() => setThumbrestColor(color)}
//             >
//               {color !== "none" && (
//                 <div
//                   className="item__dot"
//                   style={{ backgroundColor: color }}
//                 />
//               )}
//               <div className="item__label">{color}</div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 區塊 5: Optic */}
//       <div className="configurator__section border-bottom">
//         <div className="configurator__section__title">Optic</div>
//         <div className="configurator__section__values">
//           {opticOptions.map((opt, index) => (
//             <div
//               key={index}
//               className={`item ${opticType === opt.key ? "item--active" : ""}`}
//               onClick={() => setOpticType(opt.key)}
//             >
//               <div className="item__label">{opt.label}</div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Configurator;
