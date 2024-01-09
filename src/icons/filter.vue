<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M26.38,41.31v21.35l19.5-6.5V41.31l14.49-24.85l0.09-0.17c0.62-1.25,0.56-2.7-0.18-3.89c-0.73-1.19-2.01-1.9-3.4-1.9H15.37
		c-1.48,0-2.83,0.81-3.53,2.11c-0.68,1.27-0.63,2.79,0.13,4.01L26.38,41.31z M53.4,16.5L39.88,39.69v12.15l-7.5,2.5V39.69
		L18.85,16.5H53.4z"/>
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
