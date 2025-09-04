import { useCustomization } from "../contexts/Customization";

const Configurator = () => {
  const {
    slideColor,
    setSlideColor,
    compColor,
    setCompColor,
    magwellColor,
    setMagwellColor,
    opticType,
    setOpticType,
    thumbrestColor,
    setThumbrestColor
  } = useCustomization();

  return (
    <div className="configurator">
      {/* 區塊 1: 滑套顏色 */}
      <div className="configurator__section">
        <div className="configurator__section__title">Slide Color</div>
        <div className="configurator__section__values">
          {["black", "gold", "silver", "red"].map((color, index) => (
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

      {/* 區塊 2: Compensator 顏色 */}
      <div className="configurator__section">
        <div className="configurator__section__title">Compensator</div>
        <div className="configurator__section__values">
          {["none", "black", "gold", "silver", "red"].map((color, index) => (
            <div
              key={index}
              className={`item ${compColor === color ? "item--active" : ""}`}
              onClick={() => setCompColor(color)}
            >
              {/* 只有不是 none 才顯示圓形 */}
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

      {/* 區塊 3: Magwell 顏色 */}
      <div className="configurator__section">
        <div className="configurator__section__title">Flared Magwell</div>
        <div className="configurator__section__values">
          {["none", "gold", "silver", "red"].map((color, index) => (
            <div
              key={index}
              className={`item ${magwellColor === color ? "item--active" : ""}`}
              onClick={() => setMagwellColor(color)}
            >
              {/* 只有不是 none 才顯示圓形 */}
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



      <div className="configurator__section">
        <div className="configurator__section__title">Thumb Rest</div>
        <div className="configurator__section__values">
          {["none", "gold", "silver", "red"].map((color, index) => (
            <div
              key={index}
              className={`item ${thumbrestColor === color ? "item--active" : ""}`}
              onClick={() => setThumbrestColor(color)}
            >
              {/* 只有不是 none 才顯示圓形 */}
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


      {/* 區塊 4: Optic */}
      <div className="configurator__section">
        <div className="configurator__section__title">Optic</div>
        <div className="configurator__section__values">
          {[
            { key: "none", label: "None" },
            { key: "frame", label: "Frame Mounted Optic" },
            { key: "slide", label: "Slide Mounted Optic" },
          ].map((opt, index) => (
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
