<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.83,7.27c-0.94-0.95-2.2-1.47-3.54-1.47c-1.33,0-2.59,0.52-3.54,1.46L29.58,25.45l-5.32,15.97
		c-0.6,1.81-0.14,3.77,1.21,5.12c0.96,0.96,2.22,1.47,3.52,1.47c0.53,0,1.07-0.09,1.59-0.26l15.97-5.32l18.18-18.18
		c0.94-0.94,1.46-2.2,1.46-3.54c0-1.34-0.52-2.59-1.46-3.54L54.83,7.27z M36.45,27.07l8.49-8.49l8.49,8.49l-8.49,8.49L36.45,27.07z
		 M33.52,32.62l5.86,5.86l-8.79,2.93L33.52,32.62z M57.66,22.82l-8.49-8.49l2.12-2.12l8.49,8.49L57.66,22.82z"/>
	<path d="M63,42c-1.66,0-3,1.34-3,3v5.94C59.26,51.58,58.19,52,57,52H15c-1.19,0-2.26-0.42-3-1.06V15c0-1.65,1.35-3,3-3h12
		c1.66,0,3-1.34,3-3s-1.34-3-3-3H15c-4.96,0-9,4.04-9,9v42c0,4.96,4.04,9,9,9h42c4.96,0,9-4.04,9-9V45C66,43.34,64.66,42,63,42z
		 M57,60H15c-1.65,0-3-1.35-3-3v-1.52c0.93,0.33,1.94,0.52,3,0.52h42c1.06,0,2.07-0.19,3-0.52V57C60,58.65,58.65,60,57,60z"/>
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
