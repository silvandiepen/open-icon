<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<line x1="27" y1="9" x2="18" y2="63"/>
	<path d="M20.47,63.41l-4.93-0.82c-0.27-0.05-0.46-0.3-0.41-0.58L23.96,9c0.05-0.27,0.3-0.46,0.58-0.41l4.93,0.82
		c0.27,0.05,0.46,0.3,0.41,0.58L21.04,63C21,63.27,20.74,63.46,20.47,63.41z"/>
</g>
<g>
	<line x1="54" y1="9" x2="45" y2="63"/>
	<path d="M47.47,63.41l-4.93-0.82c-0.27-0.05-0.46-0.3-0.41-0.58L50.96,9c0.05-0.27,0.3-0.46,0.58-0.41l4.93,0.82
		c0.27,0.05,0.46,0.3,0.41,0.58L48.04,63C48,63.27,47.74,63.46,47.47,63.41z"/>
</g>
<g>
	<path d="M58,52.5H9.5C9.22,52.5,9,52.28,9,52v-5c0-0.28,0.22-0.5,0.5-0.5H58c0.28,0,0.5,0.22,0.5,0.5v5
		C58.5,52.28,58.28,52.5,58,52.5z"/>
</g>
<g>
	<path d="M62.5,25.5H14c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h48.5c0.28,0,0.5,0.22,0.5,0.5v5
		C63,25.28,62.78,25.5,62.5,25.5z"/>
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
