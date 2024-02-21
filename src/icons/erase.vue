<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<rect x="29.4" y="29.13" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -22.3584 35.2769)" width="4" height="31"/>
<path d="M65.5,61.03h-59c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h59c0.28,0,0.5,0.22,0.5,0.5v5
	C66,60.81,65.78,61.03,65.5,61.03z"/>
<path d="M37.09,61.03H25.72c-0.8,0-1.56-0.32-2.12-0.88L13.02,49.58c-1.32-1.32-2.05-3.08-2.05-4.95c0-1.87,0.73-3.63,2.05-4.95
	l22.63-22.63c2.73-2.73,7.17-2.73,9.9,0l13.44,13.44c2.73,2.73,2.73,7.17,0,9.9L39.21,60.15C38.65,60.72,37.89,61.03,37.09,61.03z
	 M26.96,55.03h8.89l18.89-18.89c0.39-0.39,0.39-1.02,0-1.41L41.3,21.29c-0.39-0.39-1.03-0.39-1.42,0L17.26,43.92
	c-0.26,0.26-0.29,0.55-0.29,0.71c0,0.15,0.04,0.45,0.29,0.71L26.96,55.03z"/>

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
