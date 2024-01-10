<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M55,6H17C10.93,6,6,10.93,6,17v38c0,6.07,4.93,11,11,11h38c6.07,0,11-4.93,11-11V17C66,10.93,61.07,6,55,6z M12,55V44.83
		l10.01-10.01c1.22-1.22,2.91-1.86,4.62-1.75c1.72,0.11,3.31,0.95,4.36,2.3L50.13,60H17C14.24,60,12,57.76,12,55z M60,55
		c0,2.69-2.15,4.88-4.81,4.98L34.14,32.93c-1.76-2.26-4.41-3.66-7.27-3.84c-2.85-0.17-5.67,0.88-7.69,2.91L12,39.17V17
		c0-2.76,2.24-5,5-5h38c2.76,0,5,2.24,5,5V55z"/>
	<path d="M49.5,16c-3.58,0-6.5,2.92-6.5,6.5s2.92,6.5,6.5,6.5s6.5-2.92,6.5-6.5S53.08,16,49.5,16z M49.5,25
		c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S50.88,25,49.5,25z"/>
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
