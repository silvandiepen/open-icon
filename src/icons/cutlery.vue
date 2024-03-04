<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M46.5,22.5c0,5.43,2.79,9.91,6.75,11.44V61.5h6V33.94c3.96-1.52,6.75-6,6.75-11.44c0-6.73-4.28-12-9.75-12
			S46.5,15.77,46.5,22.5z M56.25,16.5c1.77,0,3.75,2.46,3.75,6s-1.98,6-3.75,6s-3.75-2.46-3.75-6S54.48,16.5,56.25,16.5z"/>
	</g>
	<g>
		<path d="M18.75,61.5V37.1c5.09-1.35,8.87-6.03,8.87-11.6v-15h-6v13h-2.87v-13h-6v13H9.88v-13h-6v15c0,5.57,3.78,10.25,8.87,11.6
			v24.4H18.75z M10.22,27.5h11.06c-0.81,2.33-2.98,4-5.53,4C13.2,31.5,11.03,29.83,10.22,27.5z"/>
	</g>
	<g>
		<path d="M37.5,61.5h6v-51h-5.25c-7.44,0-9.75,15.39-9.75,21c0,7.65,3.03,11.68,9,11.98V61.5z M34.5,31.5
			c0-5.31,1.57-11.02,3-13.66v19.64C35.92,37.39,34.5,36.68,34.5,31.5z"/>
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
