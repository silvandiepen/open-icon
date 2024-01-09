<template>
<component :is="iconComponent"></component>
</template>

<script lang="ts" setup>
import { Icons } from "./types";
import { shallowRef, PropType, watch, defineProps } from "vue";

const props = defineProps({
  name: {
    type: String as PropType<Icons>,
    default: "",
  },
});

const iconComponent = shallowRef<any>(null);

const setData = async () => {
  const data = await import(
    /* @vite-ignore */ `../Icon/${props.name}.vue`
  ).then((r) => r);

  iconComponent.value = data.default;
};

watch(
  () => props.name,
  () => setData(),
  { immediate: true }
);
</script>
