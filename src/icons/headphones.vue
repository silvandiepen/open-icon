<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.5,56c0,0.28-0.22,0.5-0.5,0.5h-2.5c-4.78,0-12,0-12-12s7.22-12,12-12H25c0.28,0,0.5,0.22,0.5,0.5V56z M19.5,38.59
		c-2.41,0.27-3,1.39-3,5.91s0.59,5.64,3,5.91V38.59z"/>
	<path d="M49.5,56.5H47c-0.28,0-0.5-0.22-0.5-0.5V33c0-0.28,0.22-0.5,0.5-0.5h2.5c4.78,0,12,0,12,12S54.28,56.5,49.5,56.5z
		 M52.5,38.59v11.82c2.41-0.27,3-1.39,3-5.91S54.91,38.86,52.5,38.59z"/>
	<path d="M57,38.5h-6V32c0-5.69-6.87-10.5-15-10.5S21,26.31,21,32v6.5h-6V32c0-9.1,9.42-16.5,21-16.5S57,22.9,57,32V38.5z"/>
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
