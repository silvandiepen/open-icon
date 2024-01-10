<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.93,57h2.57v10.5h6V57h3v10.5h6V57h2.57c1.18,0,2.29-0.52,3.05-1.41s1.09-2.08,0.89-3.24l-3.2-19.18
		c-0.43-2.58-1.73-4.81-3.56-6.43c1.55-1.73,2.49-4,2.49-6.49c0-5.38-4.37-9.75-9.75-9.75s-9.75,4.37-9.75,9.75
		c0,2.49,0.95,4.76,2.49,6.49c-1.83,1.62-3.13,3.85-3.56,6.43l-3.2,19.18c-0.19,1.16,0.13,2.34,0.89,3.24S24.75,57,25.93,57z
		 M32.25,20.25c0-2.07,1.68-3.75,3.75-3.75s3.75,1.68,3.75,3.75S38.07,24,36,24S32.25,22.32,32.25,20.25z M31.1,34.15
		C31.5,31.75,33.56,30,36,30s4.5,1.75,4.9,4.15L43.71,51H28.29L31.1,34.15z"/>
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
