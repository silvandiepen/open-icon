<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M58.5,10.5H44.04c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h7.21l-7.54,7.54c-2.23-1.44-4.87-2.29-7.72-2.29
			c-7.86,0-14.25,6.39-14.25,14.25c0,6.83,4.83,12.54,11.25,13.93v3.57h-6.25c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5
			H33v6c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5v-6h6.25c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H39v-3.57
			c6.42-1.38,11.25-7.1,11.25-13.93c0-2.84-0.85-5.49-2.29-7.72l7.54-7.54v7.21c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5
			V13.5C61.5,11.84,60.16,10.5,58.5,10.5z M36,44.25c-4.55,0-8.25-3.7-8.25-8.25s3.7-8.25,8.25-8.25s8.25,3.7,8.25,8.25
			S40.55,44.25,36,44.25z"/>
	</g>
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
