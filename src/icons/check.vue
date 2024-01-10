<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M51.28,16.74L38.93,43.46L27.49,26.33c-0.92-1.38-2.78-1.75-4.16-0.83c-1.38,0.92-1.75,2.78-0.83,4.16l17.38,26.03
		l16.84-36.44c0.7-1.5,0.04-3.29-1.46-3.98C53.76,14.58,51.97,15.24,51.28,16.74z"/>
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
