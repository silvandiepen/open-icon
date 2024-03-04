<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M56.4,11.33c-3.09-1.1-10.95-2.51-20.4,6.22c-9.45-8.73-17.32-7.31-20.4-6.22c-5.43,1.93-9.09,7.12-9.55,13.54
			c-0.34,4.83,0.71,21.71,28.56,36.29L36,61.89l1.39-0.73c27.85-14.58,28.9-31.46,28.56-36.29C65.5,18.44,61.84,13.25,56.4,11.33z
			 M36,55.1C17.52,45.01,11.48,33.15,12.04,25.29c0.29-4.07,2.37-7.18,5.57-8.31c0.92-0.32,1.89-0.48,2.9-0.48
			c4.09,0,8.86,2.58,13.3,7.33L36,26.16l2.19-2.34c5.54-5.92,11.6-8.48,16.21-6.84c3.2,1.14,5.28,4.24,5.57,8.31
			C60.52,33.15,54.48,45.01,36,55.1z"/>
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
