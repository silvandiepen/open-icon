<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M15,66h42c4.96,0,9-4.04,9-9V45c0-1.66-1.34-3-3-3s-3,1.34-3,3v5.94C59.26,51.58,58.19,52,57,52H15
			c-1.19,0-2.26-0.42-3-1.06V15c0-1.65,1.35-3,3-3h12c1.66,0,3-1.34,3-3s-1.34-3-3-3H15c-4.96,0-9,4.04-9,9v42
			C6,61.96,10.04,66,15,66z M15,56h42c1.06,0,2.07-0.19,3-0.52V57c0,1.65-1.35,3-3,3H15c-1.65,0-3-1.35-3-3v-1.52
			C12.93,55.81,13.94,56,15,56z"/>
	</g>
	<g>
		<path d="M49.5,39c1.66,0,3-1.34,3-3V25.5H63c1.66,0,3-1.34,3-3s-1.34-3-3-3H52.5V9c0-1.66-1.34-3-3-3s-3,1.34-3,3v10.5H36
			c-1.66,0-3,1.34-3,3s1.34,3,3,3h10.5V36C46.5,37.66,47.84,39,49.5,39z"/>
	</g>
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
