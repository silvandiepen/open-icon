<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<rect x="28.5" y="51" width="28.5" height="6"/>
	<rect x="28.5" y="39" width="19.5" height="6"/>
	<rect x="28.5" y="27" width="10.5" height="6"/>
	<path d="M16,18.33V60.5h4V18.33l2.5,2.5L25.33,18l-5.91-5.91c-0.78-0.78-2.05-0.78-2.83,0L10.67,18l2.83,2.83L16,18.33z"/>
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
