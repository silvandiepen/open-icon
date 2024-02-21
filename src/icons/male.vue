<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M44.15,57H27.85c-1.96,0-3.62-1.41-3.95-3.34l-2.14-12.85c-0.7-4.19,0.48-8.46,3.22-11.7S31.75,24,36,24
		s8.27,1.86,11.02,5.1s3.92,7.51,3.22,11.7L48.1,53.66C47.78,55.59,46.12,57,44.15,57z M29.54,51h12.92l1.86-11.18
		c0.41-2.45-0.28-4.94-1.88-6.84S38.48,30,36,30s-4.83,1.09-6.44,2.98s-2.29,4.39-1.88,6.84L29.54,51z"/>
	<g>
		<path d="M43,67.5h-5c-0.28,0-0.5-0.22-0.5-0.5V54h6v13C43.5,67.28,43.28,67.5,43,67.5z"/>
		<path d="M34,67.5h-5c-0.28,0-0.5-0.22-0.5-0.5V54h6v13C34.5,67.28,34.28,67.5,34,67.5z"/>
	</g>
	<path d="M36,30c-5.38,0-9.75-4.37-9.75-9.75S30.62,10.5,36,10.5s9.75,4.37,9.75,9.75S41.38,30,36,30z M36,16.5
		c-2.07,0-3.75,1.68-3.75,3.75S33.93,24,36,24s3.75-1.68,3.75-3.75S38.07,16.5,36,16.5z"/>
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
