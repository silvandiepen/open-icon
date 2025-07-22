<template>
  <div 
    :class="classes"
    v-html="iconContent"
    v-if="iconContent"
  />
  <div v-else :class="[...classes, 'icon--placeholder']">
    <span>?</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useIconRegistry } from 'open-icon/vue';

interface Props {
  name: string;
  size?: 'xs' | 's' | 'm' | 'l' | 'xl';
  animated?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  size: 'm',
  animated: false,
});

const { getIcon } = useIconRegistry();

const iconContent = computed(() => {
  return getIcon(props.name) || '';
});

const classes = computed(() => [
  'icon',
  `icon--${props.size}`,
  {
    'icon--animated': props.animated,
  }
]);
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1em;
  height: 1em;
}

.icon--xs { font-size: 0.75rem; }
.icon--s { font-size: 0.875rem; }
.icon--m { font-size: 1rem; }
.icon--l { font-size: 1.25rem; }
.icon--xl { font-size: 1.5rem; }

.icon--placeholder {
  border: 1px dashed currentColor;
  border-radius: 4px;
  opacity: 0.3;
}

.icon--animated {
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.icon :deep(svg) {
  width: 100%;
  height: 100%;
}

.icon :deep(path),
.icon :deep(circle),
.icon :deep(rect) {
  stroke: currentColor;
  fill: currentColor;
}
</style>