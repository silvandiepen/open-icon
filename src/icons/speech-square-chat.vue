<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,6H31.5c-3.87,0-7,3.13-7,7v11H13c-3.87,0-7,3.13-7,7v18.5c0,3.87,3.13,7,7,7h2v7.87c0,1.6,1.78,2.55,3.11,1.66
		l14.3-9.53H41c3.87,0,7-3.13,7-7v-8.39l10.39,6.93c1.33,0.89,3.11-0.07,3.11-1.66v-8.33c2.63-1.01,4.5-3.56,4.5-6.54V13
		C66,9.13,62.87,6,59,6z M42,49.5c0,0.55-0.45,1-1,1H30.59L21,56.89V50.5h-8c-0.55,0-1-0.45-1-1V31c0-0.55,0.45-1,1-1h28
		c0.55,0,1,0.45,1,1V49.5z M60,31.5c0,0.55-0.45,1-1,1h-3.5v6.39l-7.5-5V31c0-3.87-3.13-7-7-7H30.5V13c0-0.55,0.45-1,1-1H59
		c0.55,0,1,0.45,1,1V31.5z"/>
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
