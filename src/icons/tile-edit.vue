<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M57,56H15c-4.41,0-8-3.14-8-7V14c0-3.86,3.59-7,8-7h12c1.1,0,2,0.9,2,2s-0.9,2-2,2H15c-2.17,0-4,1.37-4,3v35
	c0,1.63,1.83,3,4,3h42c2.17,0,4-1.37,4-3v-4c0-1.1,0.9-2,2-2s2,0.9,2,2v4C65,52.86,61.41,56,57,56z"/>
<path d="M28.99,48c-1.3,0-2.57-0.51-3.52-1.47c-1.35-1.35-1.81-3.31-1.21-5.12l5.32-15.97L47.76,7.27c0.94-0.94,2.2-1.46,3.54-1.46
	c1.34,0,2.59,0.52,3.54,1.47l9.9,9.9c0.94,0.94,1.46,2.2,1.46,3.54c0,1.33-0.52,2.59-1.46,3.54L46.55,42.42l-15.97,5.32
	C30.06,47.91,29.52,48,28.99,48z M34.83,28.69l-4.24,12.73l12.73-4.24L59.78,20.7l-8.49-8.49L34.83,28.69z"/>
<rect x="35.57" y="24.43" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.3428 37.0641)" width="6" height="18"/>
<rect x="48.3" y="11.7" transform="matrix(0.7071 -0.7071 0.7071 0.7071 0.3852 42.3362)" width="6" height="18"/>
<path d="M57,66H15c-4.96,0-9-4.04-9-9V15c0-4.96,4.04-9,9-9h12c1.66,0,3,1.34,3,3s-1.34,3-3,3H15c-1.65,0-3,1.35-3,3v42
	c0,1.65,1.35,3,3,3h42c1.65,0,3-1.35,3-3V45c0-1.66,1.34-3,3-3s3,1.34,3,3v12C66,61.96,61.96,66,57,66z"/>

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
