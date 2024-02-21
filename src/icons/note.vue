<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.5,10.5h-3v-3C51.5,7.22,51.28,7,51,7h-3c-0.28,0-0.5,0.22-0.5,0.5v3h-5v-3C42.5,7.22,42.28,7,42,7h-3
		c-0.28,0-0.5,0.22-0.5,0.5v3h-5v-3C33.5,7.22,33.28,7,33,7h-3c-0.28,0-0.5,0.22-0.5,0.5v3h-5v-3C24.5,7.22,24.28,7,24,7h-3
		c-0.28,0-0.5,0.22-0.5,0.5v3h-3c-3.86,0-7,3.14-7,7V59c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V17.5
		C61.5,13.64,58.36,10.5,54.5,10.5z M55.5,59c0,0.55-0.45,1-1,1h-37c-0.55,0-1-0.45-1-1V17.5c0-0.55,0.45-1,1-1h3v3
		c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-3h5v3c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-3h5v3
		c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-3h5v3c0,0.28,0.22,0.5,0.5,0.5h3c0.28,0,0.5-0.22,0.5-0.5v-3h3
		c0.55,0,1,0.45,1,1V59z"/>
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
