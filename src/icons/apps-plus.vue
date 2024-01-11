<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.5,10.5h-6c-4.96,0-9,4.04-9,9v6c0,4.96,4.04,9,9,9h6c4.96,0,9-4.04,9-9v-6C34.5,14.54,30.46,10.5,25.5,10.5z
		 M28.5,25.5c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3v-6c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3V25.5z"/>
	<path d="M52.5,37.5h-6c-4.96,0-9,4.04-9,9v6c0,4.96,4.04,9,9,9h6c4.96,0,9-4.04,9-9v-6C61.5,41.54,57.46,37.5,52.5,37.5z
		 M55.5,52.5c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3v-6c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3V52.5z"/>
	<path d="M25.5,37.5h-6c-4.96,0-9,4.04-9,9v6c0,4.96,4.04,9,9,9h6c4.96,0,9-4.04,9-9v-6C34.5,41.54,30.46,37.5,25.5,37.5z
		 M28.5,52.5c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3v-6c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3V52.5z"/>
	<path d="M40.5,24.5h7v7c0,1.1,0.9,2,2,2s2-0.9,2-2v-7h7c1.1,0,2-0.9,2-2s-0.9-2-2-2h-7v-7c0-1.1-0.9-2-2-2s-2,0.9-2,2v7h-7
		c-1.1,0-2,0.9-2,2S39.4,24.5,40.5,24.5z"/>
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
