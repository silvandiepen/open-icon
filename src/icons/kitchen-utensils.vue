<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M21.25,14.58c-3.44-3.97-7.32-4.08-7.75-4.08h-3v51h6V48h8.6l0.37-2.58C27.58,30.62,26.17,20.25,21.25,14.58z M19.87,42
			H16.5V18.27c0.07,0.08,0.15,0.16,0.22,0.24C18.71,20.8,21.64,26.85,19.87,42z"/>
	</g>
	<g>
		<path d="M39,38.06V10.5h-6v27.56c-3.96,1.52-6.75,6-6.75,11.44c0,6.73,4.28,12,9.75,12s9.75-5.27,9.75-12
			C45.75,44.07,42.96,39.59,39,38.06z M36,55.5c-1.77,0-3.75-2.46-3.75-6s1.98-6,3.75-6s3.75,2.46,3.75,6S37.77,55.5,36,55.5z"/>
	</g>
	<g>
		<path d="M54,10.5c-8.71,0-13.12,4.04-13.12,12c0,7.44,3.86,17.8,10.12,20.39V61.5h6V42.89c6.27-2.59,10.12-12.95,10.12-20.39
			C67.12,14.54,62.71,10.5,54,10.5z M46.88,22.5c0-3.85,1.39-5.31,4.12-5.79v18.64C48.84,32.52,46.88,27.33,46.88,22.5z M57,35.35
			V16.71c2.74,0.48,4.12,1.94,4.12,5.79C61.12,27.33,59.16,32.52,57,35.35z"/>
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
