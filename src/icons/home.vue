<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M56.5,61.5c0.28,0,0.5-0.22,0.5-0.5V30.25c0-0.16-0.07-0.31-0.2-0.4L36.3,14.47c-0.18-0.13-0.42-0.13-0.6,0L15.2,29.85
			c-0.13,0.09-0.2,0.24-0.2,0.4V61c0,0.28,0.22,0.5,0.5,0.5h18v-19h5v19H56.5z M29.5,38.5v17H21V33l15-11.25L51,33v22.5h-8.5v-17
			H29.5z"/>
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
