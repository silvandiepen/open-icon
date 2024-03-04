<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M65.5,51H55.24l-8.97-8.97c0.91-0.96,1.81-2.42,2.7-4.37c2.86-6.25,2.66-11.15-5.57-11.15c-5.32,0-7.42,2.12-7.39,5.26
			L20.12,15.88C19.56,15.32,18.8,15,18,15H6.5C6.22,15,6,15.22,6,15.5v5C6,20.78,6.22,21,6.5,21h10.26l35.12,35.12
			C52.44,56.68,53.2,57,54,57h11.5c0.28,0,0.5-0.22,0.5-0.5v-5C66,51.22,65.78,51,65.5,51z"/>
	</g>
	<g>
		<path d="M28.5,49.5h-3c-0.28,0-0.5,0.22-0.5,0.5v3.67l-9.73-9.73c-0.2-0.2-0.51-0.2-0.71,0l-2.12,2.12c-0.2,0.2-0.2,0.51,0,0.71
			l9.73,9.73H18.5c-0.28,0-0.5,0.22-0.5,0.5v3c0,0.28,0.22,0.5,0.5,0.5H27c1.1,0,2-0.9,2-2V50C29,49.72,28.78,49.5,28.5,49.5z"/>
	</g>
	<g>
		<ellipse transform="matrix(0.9871 -0.1602 0.1602 0.9871 -2.4379 7.1808)" cx="43.32" cy="18.71" rx="5.21" ry="5.21"/>
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
