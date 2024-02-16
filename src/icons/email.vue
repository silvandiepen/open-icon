<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,19.5H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7v-28C66,22.64,62.86,19.5,59,19.5z M57.17,25.5
		L36,42.44L14.83,25.5H57.17z M59,55.5H13c-0.55,0-1-0.45-1-1V28.32c0.08,0.09,0.16,0.17,0.25,0.25l22.5,18
		C35.12,46.85,35.56,47,36,47s0.88-0.15,1.25-0.44l22.5-18c0.09-0.07,0.17-0.16,0.25-0.25V54.5C60,55.05,59.55,55.5,59,55.5z"/>
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
