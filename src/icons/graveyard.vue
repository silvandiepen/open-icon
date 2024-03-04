<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M58,55.5h-5.5v-25c0-6.07-4.93-11-11-11H39v-3h5.5c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H39V5
			c0-0.28-0.22-0.5-0.5-0.5h-5C33.22,4.5,33,4.72,33,5v5.5h-5.5c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5H33v3h-2.5
			c-6.07,0-11,4.93-11,11v25H14c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h5.5h33H58c0.28,0,0.5-0.22,0.5-0.5v-5
			C58.5,55.72,58.28,55.5,58,55.5z M25.5,55.5v-25c0-2.76,2.24-5,5-5h11c2.76,0,5,2.24,5,5v25H25.5z"/>
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
