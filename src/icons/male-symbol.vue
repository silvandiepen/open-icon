<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,10.5c-9.1,0-16.5,7.4-16.5,16.5c0,8.07,5.83,14.8,13.5,16.21V51h-8.5c-0.28,0-0.5,0.22-0.5,0.5v5
		c0,0.28,0.22,0.5,0.5,0.5H33v8.5c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V57h8.5c0.28,0,0.5-0.22,0.5-0.5v-5
		c0-0.28-0.22-0.5-0.5-0.5H39v-7.79C46.67,41.8,52.5,35.07,52.5,27C52.5,17.9,45.1,10.5,36,10.5z M36,37.5
		c-5.79,0-10.5-4.71-10.5-10.5S30.21,16.5,36,16.5S46.5,21.21,46.5,27S41.79,37.5,36,37.5z"/>
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
