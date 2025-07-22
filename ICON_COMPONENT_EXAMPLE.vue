<template>
    <!-- eslint-disable vue/no-v-html -->
    <div
        :class="[bemm(), bemm('', [props.name, props.animation ? 'animated' : ''])]"
        v-html="iconData"
    />
    <!-- eslint-enable -->
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
import { ref, watch, computed } from 'vue';
import type { Icons } from 'open-icon';

// Import only the icons your app uses - this is tree-shakable!
import {
    IconEditM,
    IconAddM,
    IconCheckM,
    IconMultiplyM,
    IconPlaybackPlay,
    IconPlaybackPause,
    IconArrowLeftM,
    IconViewM,
    IconViewOffM,
    IconLockM,
    IconLockOpenM
} from 'open-icon/icons';

const bemm = useBemm('icon');

const props = defineProps({
    name: {
        type: String,
        default: '',
    },
    animation: {
        type: Boolean,
    },
});

const iconData = ref('');

// Create a map of all possible icon names to their imported SVG strings
const iconMap: Record<string, string> = {
    // Original names
    'edit-m': IconEditM,
    'add-m': IconAddM,
    'check-m': IconCheckM,
    'multiply-m': IconMultiplyM,
    'playback-play': IconPlaybackPlay,
    'playback-pause': IconPlaybackPause,
    'arrow-left-m': IconArrowLeftM,
    'view-m': IconViewM,
    'view-off-m': IconViewOffM,
    'lock-m': IconLockM,
    'lock-open-m': IconLockOpenM,
    
    // Aliases (from your switch statement)
    'edit': IconEditM,
    'plus': IconAddM,
    'check': IconCheckM,
    'x': IconMultiplyM,
    'play': IconPlaybackPlay,
    'pause': IconPlaybackPause,
    'arrow-left': IconArrowLeftM,
    'eye': IconViewM,
    'eye-off': IconViewOffM,
    'lock': IconLockM,
    'lock-open': IconLockOpenM,
};

watch(
    () => props.name,
    (newName) => {
        // Direct lookup - no async needed!
        iconData.value = iconMap[newName] || '';
    },
    {
        immediate: true,
    }
);
</script>

<style lang="scss">
.icon {
    width: 1em;
    height: 1em;
    display: block;

    --icon-infill: var(--color-background);

    svg {
        display: block;
        width: 100%;
        height: 100%;
        aspect-ratio: 1/1;

        path,
        circle,
        rect,
        polygon,
        polyline,
        ellipse,
        line {
            stroke: currentColor;
            fill: currentColor;
        }
    }
}
</style>