<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M27,43.5c-9.1,0-16.5-7.4-16.5-16.5S17.9,10.5,27,10.5c9.47,0,31.67,8.84,32.61,9.21l1.89,0.75v13.06l-1.89,0.75
	C58.67,34.66,36.47,43.5,27,43.5z M27,16.5c-5.79,0-10.5,4.71-10.5,10.5S21.21,37.5,27,37.5c6.29,0,21.26-5.26,28.5-8.05v-4.91
	C48.26,21.76,33.29,16.5,27,16.5z"/>
<path d="M44.53,57H30.41l-0.83-0.69c-0.6-0.5-14.81-12.44-18.19-23.96l5.76-1.69C19.6,39.02,29.69,48.41,32.62,51h3.85l-3.34-11.11
	l5.75-1.73L44.53,57z"/>
<path d="M32.96,65H22.5v-4h10.46c0.94,0,1.77-0.46,2.26-1.26c0.5-0.8,0.54-1.75,0.12-2.59l-1.13-2.26l3.58-1.79l1.13,2.26
	c1.04,2.08,0.93,4.5-0.29,6.48C37.4,63.82,35.29,65,32.96,65z"/>
<path d="M27,33.5c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5s6.5,2.92,6.5,6.5S30.58,33.5,27,33.5z M27,24.5
	c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5S28.38,24.5,27,24.5z"/>

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
