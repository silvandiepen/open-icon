<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,51.95c-4.41,0-8.55-1.72-11.67-4.83c-1.17-1.17-1.17-3.07,0-4.24c1.17-1.17,3.07-1.17,4.24,0
	c1.98,1.98,4.62,3.08,7.42,3.08s5.44-1.09,7.42-3.08c1.17-1.17,3.07-1.17,4.24,0c1.17,1.17,1.17,3.07,0,4.24
	C44.55,50.24,40.41,51.95,36,51.95z"/>
<g>
	<path d="M45,35c-1.66,0-3-1.34-3-3v-5c0-1.66,1.34-3,3-3s3,1.34,3,3v5C48,33.66,46.66,35,45,35z"/>
</g>
<g>
	<path d="M27,35c-1.66,0-3-1.34-3-3v-5c0-1.66,1.34-3,3-3s3,1.34,3,3v5C30,33.66,28.66,35,27,35z"/>
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
