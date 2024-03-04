<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M16.76,48l18.83,18.83C36.85,68.09,39,67.2,39,65.41V6.59c0-1.78-2.15-2.67-3.41-1.41L16.76,24H6.5
			C6.22,24,6,24.22,6,24.5v23C6,47.78,6.22,48,6.5,48H16.76z M12,30h7.24L33,16.24v39.51L19.24,42H12V30z"/>
	</g>
	<g>
		<path d="M44.82,40.15H43.5c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5h1.21c4.34,0,8.13-3.26,8.42-7.59
			c0.32-4.74-3.45-8.71-8.13-8.71h-1.5c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5H45c2.42,0,4.37,2.09,4.13,4.56
			C48.92,38.57,46.98,40.15,44.82,40.15z"/>
	</g>
	<g>
		<path d="M43,55.5c0,0.28,0.22,0.5,0.5,0.5h1.01c10.83,0,20.07-8.41,20.48-19.23C65.42,25.39,56.28,16,45,16h-1.5
			c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5H45c9.09,0,16.43,7.62,15.98,16.81C60.56,45.4,53.14,52,44.54,52H43.5
			c-0.28,0-0.5,0.22-0.5,0.5V55.5z"/>
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
