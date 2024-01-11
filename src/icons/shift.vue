<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M9,41.7h7.8v9.2c0,3.86,3.14,7,7,7h24.4c3.86,0,7-3.14,7-7v-9.2H63c1.27,0,2.41-0.8,2.83-2.01
		c0.42-1.2,0.04-2.54-0.96-3.34l-27-21.6c-1.1-0.88-2.65-0.88-3.75,0l-27,21.6c-1,0.8-1.38,2.13-0.96,3.34
		C6.59,40.9,7.73,41.7,9,41.7z M36,20.94L54.45,35.7H52.2c-1.66,0-3,1.34-3,3v12.2c0,0.55-0.45,1-1,1H23.8c-0.55,0-1-0.45-1-1V38.7
		c0-1.66-1.34-3-3-3h-2.25L36,20.94z"/>
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
