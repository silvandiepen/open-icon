import { ColorMode } from "@/types";
import { retrieveState, watchState } from "@sil/storage";
import { KEYS } from "@/types";

const colorState = reactive<{ colorMode: ColorMode | null }>(
  process.client
    ? await retrieveState(
        {
          colorMode: null,
        },
        KEYS.COLORMODE
      )
    : {
        colorMode: null,
      }
);
if(process.client) watchState(colorState, KEYS.COLORMODE);

const getUserColormode = () => {
  if (
    process.client &&
    window &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return ColorMode.DARK;
  }
  return ColorMode.LIGHT;
};

const getSavedColorMode = () => {
  if (!process.client) return null;
  const saved = localStorage.getItem(KEYS.COLORMODE) || "";
  return [ColorMode.DARK, ColorMode.LIGHT].includes(saved) ? saved : null;
};

const getColorMode = (): ColorMode =>
  colorState.colorMode || getSavedColorMode() || getUserColormode();

export const useColorMode = () => {
  const setColorMode = (mode: ColorMode) => {
    colorState.colorMode = mode;
  };
  const toggleColorMode = () => {
    colorState.colorMode =
      colorState.colorMode == ColorMode.DARK ? ColorMode.LIGHT : ColorMode.DARK;
  };

  setColorMode(getColorMode());

  return {
    setColorMode,
    toggleColorMode,
    colorMode: computed(() => colorState.colorMode || ColorMode.LIGHT),
  };
};
