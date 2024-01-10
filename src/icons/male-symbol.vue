<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M52.5,27c0-9.1-7.4-16.5-16.5-16.5S19.5,17.9,19.5,27c0,8.07,5.83,14.8,13.5,16.21V51h-6c-1.66,0-3,1.34-3,3s1.34,3,3,3h6
		v6c0,1.66,1.34,3,3,3s3-1.34,3-3v-6h6c1.66,0,3-1.34,3-3s-1.34-3-3-3h-6v-7.79C46.67,41.8,52.5,35.07,52.5,27z M25.5,27
		c0-5.79,4.71-10.5,10.5-10.5S46.5,21.21,46.5,27S41.79,37.5,36,37.5S25.5,32.79,25.5,27z"/>
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
