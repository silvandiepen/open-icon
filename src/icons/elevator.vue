<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,65H13c-3.31,0-6-2.69-6-6V26.5c0-3.31,2.69-6,6-6h46c3.31,0,6,2.69,6,6V59C65,62.31,62.31,65,59,65z M13,24.5
	c-1.1,0-2,0.9-2,2V59c0,1.1,0.9,2,2,2h46c1.1,0,2-0.9,2-2V26.5c0-1.1-0.9-2-2-2H13z"/>
<path d="M27,15.5c-0.51,0-1.02-0.2-1.41-0.59l-5.56-5.56c-0.2-0.2-0.2-0.51,0-0.71l2.12-2.12c0.2-0.2,0.51-0.2,0.71,0L27,10.67
	l4.15-4.15c0.2-0.2,0.51-0.2,0.71,0l2.12,2.12c0.2,0.2,0.2,0.51,0,0.71l-5.56,5.56C28.02,15.3,27.51,15.5,27,15.5z"/>
<path d="M49.15,15.98L45,11.83l-4.15,4.15c-0.2,0.2-0.51,0.2-0.71,0l-2.12-2.12c-0.2-0.2-0.2-0.51,0-0.71l5.56-5.56
	c0.78-0.78,2.05-0.78,2.83,0l5.56,5.56c0.2,0.2,0.2,0.51,0,0.71l-2.12,2.12C49.66,16.17,49.34,16.17,49.15,15.98z"/>
<path d="M32.81,52.26c-3.58,7.82-7.21,7.99-11.45,0c-3.31-6.23-2.74-11.45,5.73-11.45S35.74,45.84,32.81,52.26z"/>
<circle cx="44.18" cy="33.16" r="5.73"/>
<circle cx="27" cy="33.16" r="5.73"/>
<path d="M38.37,47.48c3.58-7.82,7.21-7.99,11.45,0c3.31,6.23,2.74,11.45-5.73,11.45S35.44,53.9,38.37,47.48z"/>

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
