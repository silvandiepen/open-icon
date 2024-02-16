<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M29.75,10.5c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5H33V21L15.2,34.35c-0.13,0.09-0.2,0.24-0.2,0.4V61
		c0,0.28,0.22,0.5,0.5,0.5h18v-19h5v19h18c0.28,0,0.5-0.22,0.5-0.5V34.75c0-0.16-0.07-0.31-0.2-0.4L39,21v-4.5h3.25
		c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H39v-4C39,6.22,38.78,6,38.5,6h-5C33.22,6,33,6.22,33,6.5v4H29.75z M51,55.5
		h-8.5v-17h-13v17H21v-18l15-11.25L51,37.5V55.5z"/>
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
