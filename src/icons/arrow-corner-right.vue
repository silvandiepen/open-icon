<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M56.77,37.15c0.04-0.1,0.06-0.2,0.09-0.3c0.03-0.09,0.06-0.17,0.08-0.26c0.08-0.39,0.08-0.79,0-1.18
		c-0.02-0.09-0.05-0.17-0.08-0.26c-0.03-0.1-0.05-0.21-0.09-0.3c-0.04-0.1-0.1-0.19-0.15-0.29c-0.04-0.07-0.07-0.15-0.12-0.22
		c-0.11-0.17-0.24-0.32-0.38-0.46l-9-9c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24L46.76,33H34
		c-10.48,0-19,8.52-19,19v2c0,1.66,1.34,3,3,3s3-1.34,3-3v-2c0-7.17,5.83-13,13-13h12.76l-3.88,3.88c-1.17,1.17-1.17,3.07,0,4.24
		C43.46,47.71,44.23,48,45,48s1.54-0.29,2.12-0.88l9-9c0.14-0.14,0.27-0.29,0.38-0.46c0.05-0.07,0.08-0.15,0.12-0.22
		C56.67,37.34,56.73,37.25,56.77,37.15z"/>
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
