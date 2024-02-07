<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36.31,13.51c-0.18-0.15-0.44-0.15-0.62,0L4.9,38.14c-1.48,1.18-0.64,3.56,1.25,3.56H16.8v9.2c0,3.87,3.13,7,7,7h24.4
		c3.87,0,7-3.13,7-7v-9.2h10.65c1.89,0,2.73-2.38,1.25-3.56L36.31,13.51z M49.2,35.7v15.2c0,0.55-0.45,1-1,1H23.8
		c-0.55,0-1-0.45-1-1V35.7h-5.25L36,20.94L54.45,35.7H49.2z"/>
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
