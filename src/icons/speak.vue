<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,6C19.46,6,6,17.44,6,31.5S19.46,57,36,57c2.39,0,4.75-0.24,7.05-0.71l8.83,8.83C52.45,65.7,53.22,66,54,66
	c0.39,0,0.78-0.07,1.15-0.23C56.27,65.31,57,64.21,57,63V49.72c5.74-4.78,9-11.35,9-18.22C66,17.44,52.54,6,36,6z M52.21,45.87
	c-0.76,0.57-1.21,1.46-1.21,2.4v7.49l-4.88-4.88C45.55,50.31,44.79,50,44,50c-0.25,0-0.5,0.03-0.75,0.09C40.91,50.7,38.47,51,36,51
	c-13.23,0-24-8.75-24-19.5C12,20.75,22.77,12,36,12c13.23,0,24,8.75,24,19.5C60,36.93,57.16,42.17,52.21,45.87z"/>

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
