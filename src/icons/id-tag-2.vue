<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M59,18c2.21,0,4,1.79,4,4
		v28c0,2.21-1.79,4-4,4H13c-2.21,0-4-1.79-4-4V22c0-2.21,1.79-4,4-4H59z"/>
</g>
<rect x="18" y="27" width="13.5" height="18"/>
<line x1="40.5" y1="36" x2="54" y2="36"/>
<line x1="40.5" y1="27" x2="49.5" y2="27"/>
<line x1="40.5" y1="45" x2="54" y2="45"/>

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
