<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M48.73,51.73H25.86c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h19.86V25.86c0-0.28,0.22-0.5,0.5-0.5h5
		c0.28,0,0.5,0.22,0.5,0.5v22.86C51.73,50.38,50.38,51.73,48.73,51.73z"/>
	<path d="M45,49.24L19.38,23.63c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0L49.24,45L45,49.24z"/>
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
