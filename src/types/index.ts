export const ColorMode = {
    DARK: "dark",
    LIGHT: "light",
  };
  
  export type ColorMode = (typeof ColorMode)[keyof typeof ColorMode];


export const FontSize = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
  };
  
  export type FontSize = (typeof FontSize)[keyof typeof FontSize];


  export const KEYS = {
    COLORMODE: "oif::colormode",
    UI: "oif::UI",
  };
  
  export type KEYS = (typeof KEYS)[keyof typeof KEYS];
    

