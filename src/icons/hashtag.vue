<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M9.5,52.5h10v10c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5v-10h21v10c0,0.28,0.22,0.5,0.5,0.5h5
		c0.28,0,0.5-0.22,0.5-0.5v-10h10c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5h-10v-21h10c0.28,0,0.5-0.22,0.5-0.5v-5
		c0-0.28-0.22-0.5-0.5-0.5h-10v-10C52.5,9.22,52.28,9,52,9h-5c-0.28,0-0.5,0.22-0.5,0.5v10h-21v-10C25.5,9.22,25.28,9,25,9h-5
		c-0.28,0-0.5,0.22-0.5,0.5v10h-10C9.22,19.5,9,19.72,9,20v5c0,0.28,0.22,0.5,0.5,0.5h10v21h-10C9.22,46.5,9,46.72,9,47v5
		C9,52.28,9.22,52.5,9.5,52.5z M25.5,46.5v-21h21v21H25.5z"/>
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
