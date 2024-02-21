<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M33,43.21V51h-8.5c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5H33v8.5c0,0.28,0.22,0.5,0.5,0.5h5
		c0.28,0,0.5-0.22,0.5-0.5V57h8.5c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H39v-7.79C46.67,41.8,52.5,35.07,52.5,27
		c0-9.1-7.4-16.5-16.5-16.5S19.5,17.9,19.5,27C19.5,35.07,25.33,41.8,33,43.21z M36,16.5c5.79,0,10.5,4.71,10.5,10.5
		S41.79,37.5,36,37.5S25.5,32.79,25.5,27S30.21,16.5,36,16.5z"/>
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
