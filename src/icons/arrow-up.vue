<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M50.05,36.29L36,22.24L21.95,36.29c-0.2,0.2-0.51,0.2-0.71,0l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71l16.17-16.17
		c1.17-1.17,3.07-1.17,4.24,0l16.17,16.17c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C50.56,36.48,50.24,36.48,50.05,36.29z"/>
	<path d="M38.5,57h-5c-0.28,0-0.5-0.22-0.5-0.5v-37h6v37C39,56.78,38.78,57,38.5,57z"/>
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
