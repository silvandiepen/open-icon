<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M38,33H25.24l3.88-3.88c1.17-1.17,1.17-3.07,0-4.24c-1.17-1.17-3.07-1.17-4.24,0l-9,9c-0.14,0.14-0.27,0.29-0.38,0.46
		c-0.05,0.07-0.08,0.15-0.12,0.22c-0.05,0.1-0.11,0.19-0.15,0.29c-0.04,0.1-0.06,0.2-0.09,0.3c-0.03,0.09-0.06,0.17-0.08,0.26
		c-0.08,0.39-0.08,0.79,0,1.18c0.02,0.09,0.05,0.17,0.08,0.26c0.03,0.1,0.05,0.21,0.09,0.3c0.04,0.1,0.1,0.19,0.15,0.29
		c0.04,0.07,0.07,0.15,0.12,0.22c0.11,0.17,0.24,0.32,0.38,0.46l9,9C25.46,47.71,26.23,48,27,48s1.54-0.29,2.12-0.88
		c1.17-1.17,1.17-3.07,0-4.24L25.24,39H38c7.17,0,13,5.83,13,13v2c0,1.66,1.34,3,3,3s3-1.34,3-3v-2C57,41.52,48.48,33,38,33z"/>
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
