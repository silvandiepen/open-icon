<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M60.5,31.5c0-3.58-2.92-6.5-6.5-6.5s-6.5,2.92-6.5,6.5c0,2.48,1.39,4.63,3.44,5.73C50.31,44.93,43.86,51,36,51h-5.2
	c-0.84-2.53-2.81-4.54-5.3-5.46V23.76C27.58,22.67,29,20.5,29,18c0-3.58-2.92-6.5-6.5-6.5S16,14.42,16,18c0,2.5,1.42,4.67,3.5,5.76
	v21.78c-3.35,1.23-5.75,4.44-5.75,8.21c0,4.83,3.93,8.75,8.75,8.75c3.68,0,6.82-2.28,8.12-5.5H36c11.14,0,20.26-8.73,20.93-19.71
	C59.05,36.22,60.5,34.03,60.5,31.5z M22.5,15.5c1.38,0,2.5,1.12,2.5,2.5s-1.12,2.5-2.5,2.5S20,19.38,20,18S21.12,15.5,22.5,15.5z
	 M22.5,58.5c-2.62,0-4.75-2.13-4.75-4.75S19.88,49,22.5,49s4.75,2.13,4.75,4.75S25.12,58.5,22.5,58.5z M54,29
	c1.38,0,2.5,1.12,2.5,2.5S55.38,34,54,34s-2.5-1.12-2.5-2.5S52.62,29,54,29z"/>

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
