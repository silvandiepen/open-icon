<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M52.33,14.47L38.93,43.46l-12.82-19.2c-0.15-0.23-0.46-0.29-0.69-0.14l-4.16,2.78c-0.23,0.15-0.29,0.46-0.14,0.69
		l18.27,27.36c0.22,0.32,0.71,0.29,0.87-0.07l17.51-37.89c0.12-0.25,0.01-0.55-0.24-0.66l-4.54-2.1
		C52.74,14.11,52.44,14.22,52.33,14.47z"/>
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
