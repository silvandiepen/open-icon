<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M39.25,54.29l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71L49.76,36L35.71,21.95c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54
		c0.2-0.2,0.51-0.2,0.71,0l16.17,16.17c1.17,1.17,1.17,3.07,0,4.24L39.95,54.29C39.76,54.48,39.44,54.48,39.25,54.29z"/>
	<path d="M52.5,39h-37c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h37V39z"/>
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
