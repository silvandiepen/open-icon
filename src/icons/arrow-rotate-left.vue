<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M18,48c0.77,0,1.54-0.29,2.12-0.88l10.77-10.77c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54c-0.2-0.2-0.51-0.2-0.71,0L21,37.76
		v-1.35c0-7.94,6-14.81,13.92-15.37c9.12-0.64,16.68,6.92,16.04,16.04C50.4,45,43.53,51,35.59,51H33.5c-0.28,0-0.5,0.22-0.5,0.5v5
		c0,0.28,0.22,0.5,0.5,0.5h2.02C47.06,57,56.8,47.9,57,36.36C57.2,24.5,47.5,14.8,35.64,15C24.1,15.2,15,24.94,15,36.48v1.27
		l-5.65-5.65c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71l10.77,10.77C16.46,47.71,17.23,48,18,48z"/>
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
