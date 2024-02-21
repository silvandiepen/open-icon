<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M10.99,66c-1.3,0-2.57-0.51-3.52-1.47c-1.35-1.35-1.81-3.31-1.21-5.12l5.32-15.97l30.91-30.91c1.95-1.95,5.12-1.95,7.07,0v0
	l9.9,9.9c0.94,0.94,1.46,2.2,1.46,3.54s-0.52,2.59-1.46,3.54L28.55,60.42l-15.97,5.32C12.06,65.91,11.52,66,10.99,66z M16.83,46.69
	l-4.24,12.73l12.73-4.24l29.2-29.2l-8.49-8.49L16.83,46.69z M45.32,16.78L45.32,16.78C45.32,16.78,45.32,16.79,45.32,16.78
	L45.32,16.78z"/>
<rect x="17.57" y="42.43" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -30.3422 29.6072)" width="6" height="18"/>
<rect x="43.03" y="16.98" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -4.8868 40.1525)" width="6" height="18"/>

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
