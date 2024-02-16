<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<circle cx="36" cy="24.75" r="11.25"/>
<path d="
	M55.29,55.29C55.29,63,36,63,36,63s-19.29,0-19.29-7.71C16.71,44.63,25.35,36,36,36S55.29,44.63,55.29,55.29z"/>
<path d="
	M26.83,18.25C26.15,18.09,25.45,18,24.72,18c-5.08,0-9.2,4.12-9.2,9.2c0,5.08,4.12,9.2,9.2,9.2c2.13,0,4.08-0.73,5.64-1.94"/>
<path d="
	M41.64,34.47c1.56,1.21,3.51,1.94,5.64,1.94c5.08,0,9.2-4.12,9.2-9.2c0-5.08-4.12-9.2-9.2-9.2c-0.73,0-1.43,0.09-2.11,0.25"/>
<path d="
	M16.71,55.29c0-8.36,5.34-15.47,12.78-18.14c-1.51-0.48-3.11-0.74-4.77-0.74c-8.71,0-15.78,7.06-15.78,15.78
	c0,3.35,4.44,4.92,8.61,5.66C17.02,57.11,16.71,56.26,16.71,55.29z"/>
<path d="
	M47.28,36.41c-1.66,0-3.27,0.26-4.77,0.74c7.45,2.67,12.78,9.77,12.78,18.14c0,0.97-0.31,1.82-0.84,2.56
	c4.17-0.74,8.61-2.31,8.61-5.66C63.06,43.47,55.99,36.41,47.28,36.41z"/>

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
