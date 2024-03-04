<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M6,56.16l28.8,9.58c0.11,0.05,0.23,0.08,0.35,0.12l0.9,0.3l29.95-10V20.34l-30-10l-30,10V56.16z M12,26.66l7.5,2.5V40.5
			c0,1.66,1.34,3,3,3s3-1.34,3-3v-9.34l7.5,2.5v25.16l-21-6.99V26.66z M53.51,22.5L36,28.34L31.99,27l17.51-5.84L53.51,22.5z
			 M39,58.85V33.66l21-7v25.18L39,58.85z M40.01,18L22.5,23.84l-4.01-1.34L36,16.66L40.01,18z"/>
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
