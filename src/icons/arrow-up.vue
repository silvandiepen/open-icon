<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M23.72,34.52L33,25.24V54c0,1.66,1.34,3,3,3s3-1.34,3-3V25.24l9.28,9.28c0.59,0.59,1.35,0.88,2.12,0.88
		s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24l-14.4-14.4c-0.14-0.14-0.29-0.27-0.46-0.38c-0.07-0.05-0.15-0.08-0.23-0.12
		c-0.09-0.05-0.19-0.11-0.29-0.15c-0.1-0.04-0.2-0.07-0.31-0.1c-0.08-0.02-0.17-0.06-0.25-0.08c-0.39-0.08-0.79-0.08-1.18,0
		c-0.09,0.02-0.17,0.05-0.25,0.08c-0.1,0.03-0.21,0.05-0.31,0.1c-0.1,0.04-0.19,0.1-0.29,0.15c-0.08,0.04-0.16,0.08-0.23,0.12
		c-0.17,0.11-0.32,0.24-0.46,0.38l-14.4,14.4c-1.17,1.17-1.17,3.07,0,4.24C20.65,35.69,22.55,35.69,23.72,34.52z"/>
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
