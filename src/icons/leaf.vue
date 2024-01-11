<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M60.69,13.83l-0.32-2.23l-2.23-0.32c-0.97-0.14-23.91-3.24-37.54,10.4c-3.97,3.97-6.15,9.24-6.15,14.85
	c0,4.94,1.7,9.62,4.81,13.37L8.59,60.59l2.83,2.83l10.67-10.67c3.75,3.11,8.43,4.8,13.36,4.8c5.61,0,10.88-2.18,14.85-6.15
	C63.93,37.76,60.83,14.8,60.69,13.83z M46.06,47.15c-2.83,2.83-6.6,4.39-10.61,4.39c-3.33,0-6.48-1.09-9.08-3.08l16.87-16.87
	l-2.83-2.83L23.54,45.64c-1.99-2.6-3.09-5.76-3.09-9.1c0-4.01,1.56-7.78,4.39-10.61c7.73-7.73,19.66-9.01,26.7-9.01
	c1.34,0,2.5,0.05,3.42,0.1C55.32,22.8,55.26,37.95,46.06,47.15z"/>

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
