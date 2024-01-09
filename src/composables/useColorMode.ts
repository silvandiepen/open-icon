import { ColorMode, KEYS } from "@/types";
import { retrieveState, saveState } from "@sil/storage";
import { computed, watch, ref, Ref } from "vue";

const defaultState = {
  colorMode: ColorMode.LIGHT,
}

const colorState: Ref<typeof defaultState> = ref(defaultState)

watch(() => colorState.value, () => {
  saveState(colorState, KEYS.COLORMODE);
}, { deep: true })

retrieveState(defaultState, KEYS.COLORMODE).then((r) => {
  colorState.value = r as typeof defaultState;
});

const getUserColormode = () => {
  if (
    window &&
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return ColorMode.DARK;
  }
  return ColorMode.LIGHT;
};

const getSavedColorMode = () => {
  const saved = localStorage.getItem(KEYS.COLORMODE) || "";
  return [ColorMode.DARK, ColorMode.LIGHT].includes(saved) ? saved : null;
};

const getColorMode = (): ColorMode =>
  colorState.value.colorMode || getSavedColorMode() || getUserColormode();

export const setBodyAttribute = () => {
  if (document)
    document.documentElement.setAttribute(
      "color-mode",
      colorState.value.colorMode || ColorMode.LIGHT
    );
};

export const useColorMode = () => {
  const setColorMode = (mode: ColorMode) => {
    colorState.value.colorMode = mode;
  };
  const toggleColorMode = () => {
    colorState.value.colorMode =
      colorState.value.colorMode == ColorMode.DARK ? ColorMode.LIGHT : ColorMode.DARK;
  };

  setColorMode(getColorMode());

  return {
    setColorMode,
    toggleColorMode,
    colorMode: computed(() => colorState.value.colorMode || ColorMode.LIGHT),
  };
};
