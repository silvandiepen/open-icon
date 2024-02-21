<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M44.65,26.39L36,17.74l-8.65,8.65c-0.2,0.2-0.51,0.2-0.71,0l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71l10.77-10.77
		c1.17-1.17,3.07-1.17,4.24,0l10.77,10.77c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C45.16,26.58,44.84,26.58,44.65,26.39z"/>
	<path d="M38.5,48h-5c-0.28,0-0.5-0.22-0.5-0.5V15h6v32.5C39,47.78,38.78,48,38.5,48z"/>
</g>
<path d="M56.5,61.5h-41c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h41c0.28,0,0.5,0.22,0.5,0.5v5
	C57,61.28,56.78,61.5,56.5,61.5z"/>

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
