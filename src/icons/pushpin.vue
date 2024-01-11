<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M57.21,27.52L44.48,14.79c-0.86-0.86-2.15-1.11-3.27-0.65c-1.12,0.46-1.85,1.56-1.85,2.77v5.12l-7.78,7.79H20.09
	c-1.21,0-2.31,0.73-2.77,1.85s-0.21,2.41,0.65,3.27l8.13,8.13l-10.6,10.6c-0.78,0.78-0.78,2.05,0,2.83c0.39,0.39,0.9,0.59,1.41,0.59
	s1.02-0.2,1.41-0.59l10.6-10.6l8.13,8.13c0.57,0.57,1.34,0.88,2.12,0.88c0.39,0,0.78-0.07,1.15-0.23c1.12-0.46,1.85-1.56,1.85-2.77
	V40.42l7.79-7.78h5.12c1.21,0,2.31-0.73,2.77-1.85C58.33,29.67,58.07,28.38,57.21,27.52z M46.61,27.52l-9.55,9.54
	c-0.56,0.56-0.88,1.33-0.88,2.12v5.49l-8.85-8.85h5.49c0.8,0,1.56-0.32,2.12-0.88l9.54-9.55c0.38-0.38,0.64-0.84,0.78-1.35l2.7,2.7
	C47.45,26.88,46.99,27.14,46.61,27.52z"/>

</svg>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm("icon");
</script>

<style lang="scss">
.icon {
  width: 1em;
  svg {
    width: 1em;
    height: 1em;
    path,
    rect,
    circle,
    ellipse,
    polygon {
      &:not([fill]) {
        fill: currentColor;
      }
    }
  }
  &__container{
    width: 1em; height: 1em;
    display: flex; align-items: center; justify-content: center;
  }
}
</style>
