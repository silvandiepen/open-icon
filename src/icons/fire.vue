<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36.91,25.75c-0.88-0.47-1.94-0.47-2.83,0c-0.48,0.25-11.65,6.36-11.65,18.75c0,7.57,5.86,13.73,13.06,13.73
		s13.06-6.16,13.06-13.73C48.56,32.11,37.39,26.01,36.91,25.75z M35.5,52.23c-3.89,0-7.06-3.47-7.06-7.73
		c0-6.6,4.64-10.8,7.06-12.54c2.42,1.74,7.06,5.94,7.06,12.54C42.56,48.76,39.39,52.23,35.5,52.23z"/>
	<path d="M45.83,6.88c-0.91-0.91-2.31-1.14-3.46-0.56c-0.31,0.15-7.27,3.65-14.68,9.03c-3.83-1.03-6.41-1.55-6.53-1.57
		c-0.98-0.2-2,0.11-2.71,0.82c-0.35,0.35-8.59,8.79-8.59,25.27C9.86,54.27,21.59,66,36,66c14.41,0,26.14-11.73,26.14-26.14
		C62.14,23.38,46.5,7.54,45.83,6.88z M36,60c-11.11,0-20.14-9.04-20.14-20.14c0-10.73,3.93-17.28,5.84-19.83
		c1.34,0.31,3.38,0.8,5.79,1.48c0.9,0.25,1.86,0.07,2.61-0.49c5.1-3.82,10.26-6.8,12.98-8.29c3.71,4.18,13.06,15.83,13.06,27.13
		C56.14,50.97,47.11,60,36,60z"/>
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
