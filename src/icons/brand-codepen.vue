<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M67.5,47.48V24.52L36,4.5L4.5,24.52v22.96L36,67.5L67.5,47.48z M39,58.58V47.41l11.14-7.73l8.97,6.11L39,58.58z
			 M61.5,40.25l-6.14-4.18l6.14-4.26V40.25z M39,13.42l20.14,12.8l-9.03,6.26L39,24.91V13.42z M44.9,36.11L36,42.28l-8.9-6.17
			l8.9-6.07L44.9,36.11z M33,13.42v11.48l-11.12,7.58l-9.03-6.26L33,13.42z M10.5,31.8l6.14,4.26l-6.14,4.18V31.8z M33,58.58
			L12.88,45.79l8.97-6.11L33,47.41V58.58z"/>
	</g>
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
