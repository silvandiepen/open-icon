<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M35.5,58.24c7.2,0,13.06-6.16,13.06-13.73c0-12.39-11.17-18.49-11.65-18.75c-0.88-0.47-1.94-0.47-2.82,0
		c-0.48,0.25-11.65,6.36-11.65,18.75C22.44,52.08,28.3,58.24,35.5,58.24z M35.5,31.97c2.41,1.74,7.07,5.96,7.07,12.54
		c0,4.26-3.17,7.73-7.06,7.73s-7.06-3.47-7.06-7.73C28.44,37.9,33.08,33.7,35.5,31.97z"/>
	<path d="M36,66c14.42,0,26.14-11.73,26.14-26.14c0-16.48-15.64-32.31-16.31-32.98c-0.91-0.91-2.31-1.14-3.46-0.56
		c-0.31,0.15-7.27,3.66-14.68,9.03c-3.83-1.03-6.41-1.55-6.54-1.58c-0.99-0.2-2,0.11-2.71,0.82c-0.35,0.35-8.59,8.78-8.59,25.26
		C9.86,54.27,21.58,66,36,66z M21.7,20.03c1.34,0.31,3.38,0.81,5.79,1.48c0.9,0.25,1.86,0.07,2.61-0.49
		c5.1-3.82,10.25-6.81,12.98-8.3c3.71,4.18,13.06,15.83,13.06,27.13C56.14,50.96,47.11,60,36,60s-20.14-9.04-20.14-20.14
		C15.86,29.13,19.79,22.58,21.7,20.03z"/>
</g>

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
