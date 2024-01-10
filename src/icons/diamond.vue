<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M39.07,59.5l23.17-27.8l-9.95-14.92C51.55,15.67,50.31,15,48.96,15H23.04c-1.34,0-2.58,0.67-3.33,1.78L9.76,31.7
		l23.17,27.8c0.76,0.91,1.88,1.44,3.07,1.44S38.31,60.41,39.07,59.5z M25.56,33.5l4.32,12.97L19.07,33.5H25.56z M52.93,33.5
		L42.12,46.47l4.32-12.97H52.93z M42.22,33.5L36,52.18L29.78,33.5H42.22z M29.78,29.5l2.83-8.5h6.78l2.83,8.5H29.78z M53.56,29.5
		h-7.12L43.61,21h4.29L53.56,29.5z M24.11,21h4.29l-2.83,8.5h-7.12L24.11,21z"/>
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
