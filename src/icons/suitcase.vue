<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,61.5H13c-3.86,0-7-3.14-7-7v-28c0-3.86,3.14-7,7-7h46c3.86,0,7,3.14,7,7v28C66,58.36,62.86,61.5,59,61.5z M13,25.5
		c-0.55,0-1,0.45-1,1v28c0,0.55,0.45,1,1,1h46c0.55,0,1-0.45,1-1v-28c0-0.55-0.45-1-1-1H13z"/>
	<path d="M45,25.5c-1.66,0-3-1.34-3-3v-6H30v6c0,1.66-1.34,3-3,3s-3-1.34-3-3v-9c0-1.66,1.34-3,3-3h18c1.66,0,3,1.34,3,3v9
		C48,24.16,46.66,25.5,45,25.5z"/>
	<path d="M27,60.5c-1.1,0-2-0.9-2-2v-36c0-1.1,0.9-2,2-2s2,0.9,2,2v36C29,59.6,28.1,60.5,27,60.5z"/>
	<path d="M45,60.5c-1.1,0-2-0.9-2-2v-36c0-1.1,0.9-2,2-2s2,0.9,2,2v36C47,59.6,46.1,60.5,45,60.5z"/>
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
