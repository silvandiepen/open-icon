<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M48.2,57.9H23.8c-3.87,0-7-3.13-7-7v-9.2H6.15c-1.89,0-2.73-2.38-1.25-3.56l30.79-24.63c0.18-0.15,0.44-0.15,0.62,0
	L67.1,38.14c1.48,1.18,0.64,3.56-1.25,3.56H55.2v9.2C55.2,54.77,52.07,57.9,48.2,57.9z M17.55,35.7h5.25v15.2c0,0.55,0.45,1,1,1
	h24.4c0.55,0,1-0.45,1-1V35.7h5.25L36,20.94L17.55,35.7z"/>

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
