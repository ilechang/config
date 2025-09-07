import { useState } from "react";
import { useCustomization } from "../contexts/Customization";

const slideOptions = ["black", "gold", "silver", "red"];
const compOptions = ["none", "black", "gold", "silver", "red"];
const magwellOptions = ["none", "gold", "silver", "red"];
const thumbrestOptions = ["none", "gold", "silver", "red"];
const opticOptions = [
  { key: "none", label: "× None" },
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


  const handleClearAll = () => {
    setSlideColor("black");     // 初始滑套顏色
    setCompColor("none");       // 沒有補償器
    setMagwellColor("none");    // 沒有彈匣槽
    setThumbrestColor("none");  // 沒有拇指托
    setOpticType("none");       // 沒有光學瞄具
  };


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
      <div className="configurator__section my-0 pt-0">
        <div className="configurator__section__title text-center" >Slide Color</div>
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
      <div className="configurator__section my-0 pt-0">
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <div className="configurator__section__title">Compensator</div>
          <img
            src="./comp.webp"
            alt="Compensator"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </div>



        <div className="configurator__section__values">
          {compOptions.map((color, index) => (
            <div
              key={index}
              className={`item ${compColor === color ? "item--active" : ""}`}
              onClick={() => setCompColor(color)}
            >
              {color === "none" ? (
                // ⬇️ None 用叉叉
                <div
                  className="item__dot"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#222",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ×
                </div>
              ) : (
                // ⬇️ 其他顏色用實心圓
                <div className="item__dot" style={{ backgroundColor: color }} />
              )}
              <div className="item__label">{color}</div>
            </div>
          ))}
        </div>

        <button onClick={() => setShowComp(!showComp)} className="learn-more mt-3">
          {showComp ? "Hide▲" : "Learn more▼"}
        </button>

        {showComp && <p className="description">{compDescription}</p>}
      </div>



      {/* 區塊 3: Magwell */}
      <div className="configurator__section my-0 pt-0">
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <div className="configurator__section__title">Flared Magwell</div>
          <img src="./magwell.webp" alt="Compensator" className="img-fluid" style={{ maxWidth: "100px" }} />
        </div>

        <div className="configurator__section__values">
          {magwellOptions.map((color, index) => (
            <div
              key={index}
              className={`item ${magwellColor === color ? "item--active" : ""}`}
              onClick={() => setMagwellColor(color)}
            >
              {color === "none" ? (
                // ⬇️ None 用叉叉
                <div
                  className="item__dot"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#222", // 深色背景
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ×
                </div>
              ) : (
                // ⬇️ 其他顏色用實心圓
                <div
                  className="item__dot"
                  style={{ backgroundColor: color }}
                />
              )}
              <div className="item__label">{color}</div>
            </div>
          ))}



        </div>

        <button onClick={() => setShowMagwell(!showMagwell)} className="learn-more mt-3">
          {showMagwell ? "Hide▲" : "Learn more▼"}
        </button>
        {showMagwell && <p className="description">{magwellDescription}</p>}
      </div>


      {/* 區塊 4: Thumb Rest */}
      <div className="configurator__section my-0 pt-0">
        <div className="d-flex justify-content-center align-items-center mx-auto">
          <div className="configurator__section__title">Thumb Rest</div>
          <img
            src="./rest.webp"
            alt="Thumb Rest"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </div>

        <div className="configurator__section__values">
          {thumbrestOptions.map((color, index) => (
            <div
              key={index}
              className={`item ${thumbrestColor === color ? "item--active" : ""}`}
              onClick={() => setThumbrestColor(color)}
            >
              {color === "none" ? (
                <div
                  className="item__dot"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#222",
                    color: "#fff",
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  ×
                </div>
              ) : (
                <div className="item__dot" style={{ backgroundColor: color }} />
              )}
              <div className="item__label">{color}</div>
            </div>
          ))}
        </div>


        <button onClick={() => setShowThumbrest(!showThumbrest)} className="learn-more mt-3">
          {showThumbrest ? "Hide ▲" : "Learn more ▼"}
        </button>

        {showThumbrest && <p className="description">{thumbrestDescription}</p>}



      </div>




      {/* 區塊 5: Optic */}
      <div className="configurator__section">
        <div className="d-flex justify-content-center align-items-center mx-auto mb-2">
          <div className="configurator__section__title me-2">Optic Mount</div>
          <img
            src="./mount.webp"
            alt="Optic Mount"
            className="img-fluid"
            style={{ maxWidth: "100px" }}
          />
        </div>



        <div className="configurator__section__values d-flex flex-wrap gap-2 mt-2">
          {opticOptions.map((opt, index) => (
            <button
              key={index}
              style={{ fontSize: "12px" }}
              className={`btn ${opticType === opt.key
                  ? "btn-light rounded-0"
                  : "btn-outline-light rounded-0"
                }`}
              onClick={() => setOpticType(opt.key)}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <button onClick={() => setShowOptic(!showOptic)} className="learn-more mt-3">
          {showOptic ? "Hide ▲" : "Learn more ▼"}
        </button>

        {showOptic && <p className="description">{opticDescription}</p>}
      </div>



      {/* 區塊 6: Clear All */}
      <div className="configurator__section text-center border-0 rounded-0 mb-0">
        <button onClick={handleClearAll} className="clear-all-btn">
          Clear All
        </button>
      </div>
    </div >
  );
};

export default Configurator;




