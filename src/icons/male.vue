<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M23.9,53.66c0.32,1.94,1.98,3.34,3.95,3.34h0.65v10c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V57h3v10
			c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V57h0.65c1.96,0,3.62-1.41,3.95-3.34l2.14-12.85c0.7-4.19-0.48-8.46-3.22-11.7
			c-0.97-1.14-2.1-2.1-3.33-2.88c1.29-1.65,2.06-3.72,2.06-5.98c0-5.38-4.37-9.75-9.75-9.75s-9.75,4.37-9.75,9.75
			c0,2.25,0.78,4.33,2.06,5.98c-1.23,0.78-2.36,1.74-3.33,2.88c-2.75,3.24-3.92,7.51-3.22,11.7L23.9,53.66z M32.25,20.25
			c0-2.07,1.68-3.75,3.75-3.75s3.75,1.68,3.75,3.75S38.07,24,36,24S32.25,22.32,32.25,20.25z M29.56,32.98
			C31.17,31.09,33.52,30,36,30s4.83,1.09,6.44,2.98s2.29,4.39,1.88,6.84L42.46,51H29.54l-1.86-11.18
			C27.27,37.37,27.96,34.88,29.56,32.98z"/>
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
