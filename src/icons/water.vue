<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M35.45,65.99C47.28,66.3,57,56.76,57,45C57,25.98,38.89,7.65,38.12,6.88l-1.77-1.77c-0.2-0.2-0.51-0.2-0.71,0l-1.77,1.77
		c-0.73,0.73-17.2,17.4-18.76,35.42C14.05,54.57,23.13,65.67,35.45,65.99z M36,13.44C40.58,18.69,51,32.05,51,45
		c0,8.27-6.73,15-15,15s-15-6.73-15-15C21,32.05,31.42,18.69,36,13.44z"/>
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
