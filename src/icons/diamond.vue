<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,60.94c-1.19,0-2.31-0.52-3.07-1.44L9.76,31.7l9.95-14.92c0.74-1.12,1.99-1.78,3.33-1.78h25.93
		c1.34,0,2.58,0.67,3.33,1.78l9.95,14.92L39.07,59.5C38.31,60.41,37.19,60.94,36,60.94z M17.24,31.3L36,53.81L54.76,31.3L47.89,21
		H24.11L17.24,31.3z"/>
	<rect x="13.5" y="29.5" width="45" height="4"/>
	<polygon points="34.1,59.13 24.89,31.5 29.6,17.37 33.4,18.63 29.11,31.5 37.9,57.87 	"/>
	<polygon points="37.9,59.13 34.1,57.87 42.89,31.5 38.6,18.63 42.4,17.37 47.11,31.5 	"/>
</g>

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
