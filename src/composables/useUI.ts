import { FontSize, KEYS } from "@/types";
import { retrieveState, saveState } from "@sil/storage";
import { computed, watch, ref, Ref } from "vue";

const defaultState = {
  fontSize: FontSize.SMALL,
}

const uiState: Ref<typeof defaultState> = ref(defaultState)

watch(() => uiState.value, () => {
  saveState(uiState, KEYS.UI);
}, { deep: true })

retrieveState(defaultState, KEYS.COLORMODE).then((r) => {
  uiState.value = r as typeof defaultState;
});


export const useUI = () => {
  const setFontSize = (size: FontSize) => {
    uiState.value.fontSize = size;
  };

  return {
    setFontSize,
    fontSize: computed(() => uiState.value.fontSize || FontSize.SMALL)
  };
};
