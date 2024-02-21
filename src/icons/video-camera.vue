<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M43.5,57H15c-4.96,0-9-4.04-9-9V31.5c0-4.96,4.04-9,9-9h28.5c4.96,0,9,4.04,9,9V48C52.5,52.96,48.46,57,43.5,57z M15,28.5
	c-1.65,0-3,1.35-3,3V48c0,1.65,1.35,3,3,3h28.5c1.65,0,3-1.35,3-3V31.5c0-1.65-1.35-3-3-3H15z"/>
<path d="M63,57c-0.58,0-1.16-0.17-1.66-0.5l-13.5-9C47,46.94,46.5,46,46.5,45v-9c0-1,0.5-1.94,1.34-2.5l13.5-9
	c0.92-0.61,2.1-0.67,3.08-0.15C65.39,24.88,66,25.89,66,27v27c0,1.11-0.61,2.12-1.58,2.65C63.97,56.88,63.49,57,63,57z M52.5,43.39
	l7.5,5V32.61l-7.5,5V43.39z"/>
<path d="M22.5,28.5c-5.38,0-9.75-4.37-9.75-9.75S17.12,9,22.5,9s9.75,4.37,9.75,9.75S27.88,28.5,22.5,28.5z M22.5,15
	c-2.07,0-3.75,1.68-3.75,3.75s1.68,3.75,3.75,3.75s3.75-1.68,3.75-3.75S24.57,15,22.5,15z"/>
<path d="M36,28.5c-5.38,0-9.75-4.37-9.75-9.75S30.62,9,36,9s9.75,4.37,9.75,9.75S41.38,28.5,36,28.5z M36,15
	c-2.07,0-3.75,1.68-3.75,3.75S33.93,22.5,36,22.5s3.75-1.68,3.75-3.75S38.07,15,36,15z"/>

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
