<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M60.27,56.03l-11.2-11.2c2.63-3.51,4.21-7.84,4.21-12.55c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
		c4.71,0,9.05-1.58,12.55-4.2l11.2,11.2c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54C60.46,56.54,60.46,56.22,60.27,56.03z M32.27,47.27
		c-8.27,0-15-6.73-15-15s6.73-15,15-15s15,6.73,15,15S40.54,47.27,32.27,47.27z"/>
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
