<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M56.25,34.5c-5.47,0-9.75-5.27-9.75-12s4.28-12,9.75-12S66,15.77,66,22.5S61.72,34.5,56.25,34.5z M56.25,16.5
	c-1.77,0-3.75,2.46-3.75,6s1.98,6,3.75,6s3.75-2.46,3.75-6S58.02,16.5,56.25,16.5z"/>
<path d="M15.75,37.5c-6.55,0-11.87-5.38-11.87-12v-15h6v15c0,3.31,2.63,6,5.87,6c3.24,0,5.87-2.69,5.87-6v-15h6v15
	C27.62,32.12,22.29,37.5,15.75,37.5z"/>
<rect x="53.25" y="28.5" width="6" height="33"/>
<rect x="12.75" y="31.5" width="6" height="30"/>
<rect x="12.75" y="10.5" width="6" height="16"/>
<path d="M43.5,61.5h-6V43.48c-5.97-0.31-9-4.33-9-11.98c0-5.61,2.31-21,9.75-21h5.25V61.5z M37.5,17.84c-1.43,2.64-3,8.35-3,13.66
	c0,5.18,1.42,5.89,3,5.98V17.84z"/>
<rect x="4.88" y="23.5" width="21.74" height="4"/>

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
