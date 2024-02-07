<template>
<component :is="iconComponent"></component>
</template>

<script lang="ts" setup>
import { Icons } from "./types";
import { shallowRef, PropType, watch, defineProps } from "vue";
import { getIcon } from ".";

const props = defineProps({
  name: {
    type: String as PropType<Icons>,
    default: "",
  },
});

const iconComponent = shallowRef<any>(null);

const setData = async () => {
  const data = getIcon(props.name);
  iconComponent.value = data;
};

watch(
  () => props.name,
  () => setData(),
  { immediate: true }
);
</script>
