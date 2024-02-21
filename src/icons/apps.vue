<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.5,34.5h-6c-4.96,0-9-4.04-9-9v-6c0-4.96,4.04-9,9-9h6c4.96,0,9,4.04,9,9v6C34.5,30.46,30.46,34.5,25.5,34.5z
		 M19.5,16.5c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3v-6c0-1.65-1.35-3-3-3H19.5z"/>
	<path d="M52.5,34.5h-6c-4.96,0-9-4.04-9-9v-6c0-4.96,4.04-9,9-9h6c4.96,0,9,4.04,9,9v6C61.5,30.46,57.46,34.5,52.5,34.5z
		 M46.5,16.5c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3v-6c0-1.65-1.35-3-3-3H46.5z"/>
	<path d="M52.5,61.5h-6c-4.96,0-9-4.04-9-9v-6c0-4.96,4.04-9,9-9h6c4.96,0,9,4.04,9,9v6C61.5,57.46,57.46,61.5,52.5,61.5z
		 M46.5,43.5c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3v-6c0-1.65-1.35-3-3-3H46.5z"/>
	<path d="M25.5,61.5h-6c-4.96,0-9-4.04-9-9v-6c0-4.96,4.04-9,9-9h6c4.96,0,9,4.04,9,9v6C34.5,57.46,30.46,61.5,25.5,61.5z
		 M19.5,43.5c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3v-6c0-1.65-1.35-3-3-3H19.5z"/>
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
