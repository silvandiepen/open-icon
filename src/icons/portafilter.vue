<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M60.32,11.68C56.71,8.07,51.64,6.82,47,7.9l-3.12-3.12L33.28,15.39l3.11,3.11C36.14,19.55,36,20.64,36,21.75
		s0.14,2.2,0.39,3.26l-4.7,4.7l-1.59-1.59L8.88,49.33c-3.8,3.8-3.8,9.99,0,13.79c1.84,1.84,4.29,2.86,6.89,2.86s5.05-1.01,6.89-2.86
		l21.21-21.21l-1.59-1.59L47,35.61c1.07,0.25,2.16,0.39,3.25,0.39c1.09,0,2.18-0.14,3.25-0.39l3.12,3.12l10.61-10.61L64.1,25
		C65.18,20.36,63.93,15.29,60.32,11.68z M18.43,58.88c-1.42,1.42-3.89,1.42-5.3,0c-1.46-1.46-1.46-3.84,0-5.3L30.09,36.6l4.77,4.77
		l0.53,0.53L18.43,58.88z M38.05,36.07l-2.12-2.12l3.24-3.24c0.31,0.39,0.65,0.76,1,1.12c0.36,0.36,0.73,0.69,1.12,1L38.05,36.07z
		 M44.41,27.59C42.85,26.03,42,23.96,42,21.75s0.86-4.28,2.42-5.83c1.61-1.61,3.72-2.41,5.83-2.41c2.11,0,4.23,0.8,5.83,2.41
		c3.22,3.22,3.22,8.45,0,11.67C52.86,30.8,47.63,30.8,44.41,27.59z"/>
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
