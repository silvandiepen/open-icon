<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M31.5,57C40.6,57,48,49.6,48,40.5c0-3.47-1.08-6.68-2.91-9.34l8.87-8.87V34c0,0.28,0.22,0.5,0.5,0.5h5
			c0.28,0,0.5-0.22,0.5-0.5V15.04c0-1.66-1.34-3-3-3H38c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h11.71l-8.87,8.87
			C38.18,25.08,34.97,24,31.5,24C22.4,24,15,31.4,15,40.5S22.4,57,31.5,57z M31.5,30C37.29,30,42,34.71,42,40.5S37.29,51,31.5,51
			S21,46.29,21,40.5S25.71,30,31.5,30z"/>
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
