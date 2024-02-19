<template>
    <component :is="iconComponent"></component>
</template>

<script lang="ts" setup>
import { computed, PropType } from "vue";

import { Icons, getIcon } from "@/icons";


const props = defineProps({
    name: {
        type: String as PropType<Icons>
    }
})

const iconComponent = computed(() => {
    return getIcon(props.name as Icons);
})
</script>
<style lang="scss">
svg {
    display: block;
    width: 1em;height: 1em;
    aspect-ratio: 1/1;
    path, circle, rect, polygon, polyline, line{
        fill: currentColor;
    }
}
</style>