<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,6H31.5c-3.86,0-7,3.14-7,7v11H13c-3.86,0-7,3.14-7,7v18.5c0,3.86,3.14,7,7,7h2v11.61L32.41,56.5H41c3.86,0,7-3.14,7-7
		v-8.39l13.5,9V38.04c2.63-1.01,4.5-3.56,4.5-6.54V13C66,9.14,62.86,6,59,6z M42,49.5c0,0.55-0.45,1-1,1H30.59L21,56.89V50.5h-8
		c-0.55,0-1-0.45-1-1V31c0-0.55,0.45-1,1-1h28c0.55,0,1,0.45,1,1V49.5z M60,31.5c0,0.55-0.45,1-1,1h-3.5v6.39l-7.5-5V31
		c0-3.86-3.14-7-7-7H30.5V13c0-0.55,0.45-1,1-1H59c0.55,0,1,0.45,1,1V31.5z"/>
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
