<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M54.25,10.5h-30c-3.86,0-7,3.14-7,7v3h-3c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h3v5h-3
			c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h3v5h-3c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h3v5h-3
			c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h3v3c0,3.86,3.14,7,7,7h30c3.86,0,7-3.14,7-7v-37
			C61.25,13.64,58.11,10.5,54.25,10.5z M55.25,54.5c0,0.55-0.45,1-1,1h-30c-0.55,0-1-0.45-1-1v-3h3c0.28,0,0.5-0.22,0.5-0.5v-3
			c0-0.28-0.22-0.5-0.5-0.5h-3v-5h3c0.28,0,0.5-0.22,0.5-0.5v-3c0-0.28-0.22-0.5-0.5-0.5h-3v-5h3c0.28,0,0.5-0.22,0.5-0.5v-3
			c0-0.28-0.22-0.5-0.5-0.5h-3v-5h3c0.28,0,0.5-0.22,0.5-0.5v-3c0-0.28-0.22-0.5-0.5-0.5h-3v-3c0-0.55,0.45-1,1-1h30
			c0.55,0,1,0.45,1,1V54.5z"/>
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
