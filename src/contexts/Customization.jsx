import { createContext, useContext, useState } from "react";

const CustomizationContext = createContext();

export const CustomizationProvider = ({ children }) => {
  // 滑套顏色
  const [slideColor, setSlideColor] = useState("black");

  // Compensator 顏色 (none = 沒有)
  const [compColor, setCompColor] = useState("none");

  // Magwell 顏色 (none = 沒有)
  const [magwellColor, setMagwellColor] = useState("none");

  // Optic 類型 (none, frame, slide)
  const [opticType, setOpticType] = useState("none");


  // Magwell 顏色 (none = 沒有)
  const [thumbrestColor, setThumbrestColor] = useState("none");

  return (
    <CustomizationContext.Provider
      value={{
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
      }}
    >
      {children}
    </CustomizationContext.Provider>
  );
};

export const useCustomization = () => useContext(CustomizationContext);
