<template>
  <div :class="iconClasses">
    <component v-if="iconComponent" :is="iconComponent"></component>
  </div>
</template>

<script lang="ts" setup>
import { Icons } from "./types";
import { useBemm } from "bemm";
import {
  PropType,
  computed,
  shallowRef,
  defineAsyncComponent,
  watch,
} from "vue";

const bemm = useBemm("icon");

const props = defineProps({
  size: {
    type: String,
    default: "1em",
  },
  name: {
    type: String as PropType<Icons>,
    default: Icons.VISIBLE,
  },
});

const iconClasses = computed(() => {
  return [bemm()];
});
const iconComponent = shallowRef(null);

watch(
  () => props.name,
  () => {
    iconComponent.value = defineAsyncComponent(
      () => import(`./${props.name}.vue`)
    );
  },
  { immediate: true }
);
</script>

<style lang="scss">
.icon {
  width: 1em;
  svg {
    path,
    rect,
    polygon {
      fill: currentColor;
    }
  }
}
</style>