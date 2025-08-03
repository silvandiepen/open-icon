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
import { ref, watch, computed, inject } from 'vue';
import type { Icons } from 'open-icon';

const bemm = useBemm('icon');

const props = defineProps({
    name: {
        type: String as PropType<Icons>,
        default: '',
    },
    animation: {
        type: Boolean,
    },
});

const iconData = ref('');

// Inject the icon registry that each app provides
const iconRegistry = inject<Record<string, string>>('iconRegistry', {});

const iconName = computed(()=>{
  switch(props.name){
   case 'edit':
      return 'edit-m';
    case 'plus':
      return 'add-m';
    case 'check':
      return 'check-m';
    case 'x':
      return 'multiply-m';
    case 'play':
      return 'playback-play';
    case 'pause':
      return 'playback-pause';
    case 'arrow-left':
      return 'arrow-left-m';
    case 'eye':
      return 'view-m';
    case 'eye-off':
      return 'view-off-m';
    case 'lock':
      return 'lock-m';
    case 'lock-open':
      return 'lock-open-m';
    default:
      return props.name;
  }
})

watch(
    () => iconName.value,
    (newName) => {
        // Get icon from the injected registry
        iconData.value = iconRegistry[newName] || '';
        
        if (!iconData.value && newName) {
            console.warn(`Icon "${newName}" not found in icon registry. Did you forget to register it?`);
        }
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