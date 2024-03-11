<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,21.75c-7.86,0-14.25,6.39-14.25,14.25c0,6.83,4.83,12.54,11.25,13.93v3.57h-6.25c-0.28,0-0.5,0.22-0.5,0.5v5
		c0,0.28,0.22,0.5,0.5,0.5H33v6c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5v-6h6.25c0.28,0,0.5-0.22,0.5-0.5v-5
		c0-0.28-0.22-0.5-0.5-0.5H39v-3.57c6.42-1.38,11.25-7.1,11.25-13.93c0-2.84-0.85-5.49-2.29-7.72l7.54-7.54v7.21
		c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V13.5c0-1.66-1.34-3-3-3H44.04c-0.28,0-0.5,0.22-0.5,0.5v5
		c0,0.28,0.22,0.5,0.5,0.5h7.21l-7.54,7.54C41.49,22.6,38.84,21.75,36,21.75z M36,44.25c-4.55,0-8.25-3.7-8.25-8.25
		s3.7-8.25,8.25-8.25s8.25,3.7,8.25,8.25S40.55,44.25,36,44.25z"/>
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
