<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M46.5,29.5h-21c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h21c0.28,0,0.5-0.22,0.5-0.5v-3
		C47,29.72,46.78,29.5,46.5,29.5z"/>
	<path d="M46.5,38.5h-21c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h21c0.28,0,0.5-0.22,0.5-0.5v-3
		C47,38.72,46.78,38.5,46.5,38.5z"/>
	<path d="M46.5,47.5h-21c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h21c0.28,0,0.5-0.22,0.5-0.5v-3
		C47,47.72,46.78,47.5,46.5,47.5z"/>
	<path d="M54.5,10.5h-3V7h-4v3.5h-5V7h-4v3.5h-5V7h-4v3.5h-5V7h-4v3.5h-3c-3.86,0-7,3.14-7,7V59c0,3.86,3.14,7,7,7h37
		c3.86,0,7-3.14,7-7V17.5C61.5,13.64,58.36,10.5,54.5,10.5z M55.5,59c0,0.55-0.45,1-1,1h-37c-0.55,0-1-0.45-1-1V17.5
		c0-0.55,0.45-1,1-1h3V20h4v-3.5h5V20h4v-3.5h5V20h4v-3.5h5V20h4v-3.5h3c0.55,0,1,0.45,1,1V59z"/>
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
