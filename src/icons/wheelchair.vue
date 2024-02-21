<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M27,61.5c-9.1,0-16.5-7.4-16.5-16.5S17.9,28.5,27,28.5S43.5,35.9,43.5,45S36.1,61.5,27,61.5z M27,34.5
	c-5.79,0-10.5,4.71-10.5,10.5S21.21,55.5,27,55.5S37.5,50.79,37.5,45S32.79,34.5,27,34.5z"/>
<path d="M36.54,39.7l-4.24-4.24L40.76,27L36,22.24l-4.15,4.15c-0.2,0.2-0.51,0.2-0.71,0l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71
	l6.27-6.27c1.17-1.17,3.07-1.17,4.24,0l9,9c1.17,1.17,1.17,3.07,0,4.24L36.54,39.7z"/>
<path d="M56.5,61.5h-5c-0.28,0-0.5-0.22-0.5-0.5V48H37.5v-6H53c2.21,0,4,1.79,4,4v15C57,61.28,56.78,61.5,56.5,61.5z"/>
<path d="M54,24.5c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5s6.5,2.92,6.5,6.5S57.58,24.5,54,24.5z M54,15.5
	c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5S55.38,15.5,54,15.5z"/>

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
