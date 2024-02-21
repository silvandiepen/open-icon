<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M42.75,48.88h-13.5c-1.66,0-3-1.34-3-3v-0.69c0-3.43-1.13-6.74-3.17-9.31c-2.6-3.27-3.85-7.37-3.53-11.56
		c0.61-7.87,6.75-14.22,14.58-15.08c4.69-0.52,9.38,0.98,12.87,4.1c3.49,3.13,5.5,7.61,5.5,12.3c0,3.62-1.15,7.05-3.33,9.93
		c-2.24,2.95-3.42,6.28-3.42,9.63v0.69C45.75,47.53,44.41,48.88,42.75,48.88z M32.13,42.88h7.76c0.44-3.86,1.97-7.6,4.5-10.94
		c1.38-1.83,2.12-4.01,2.12-6.31c0-2.98-1.28-5.83-3.5-7.83c-2.25-2.02-5.17-2.95-8.21-2.61c-4.89,0.54-8.87,4.66-9.26,9.59
		c-0.21,2.67,0.59,5.28,2.24,7.36C30.19,35.18,31.7,38.92,32.13,42.88z"/>
	<path d="M42.8,54.88H29.2c-1.1,0-2-0.9-2-2s0.9-2,2-2H42.8c1.1,0,2,0.9,2,2S43.91,54.88,42.8,54.88z"/>
	<path d="M40.5,61.88h-9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S41.6,61.88,40.5,61.88z"/>
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
