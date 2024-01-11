<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M50,6H22c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7V13C57,9.14,53.86,6,50,6z M51,59
		c0,0.55-0.45,1-1,1H22c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h28c0.55,0,1,0.45,1,1V59z"/>
	<path d="M35.41,51.06c-0.19,0.04-0.38,0.1-0.56,0.17c-0.18,0.08-0.35,0.17-0.51,0.28c-0.17,0.11-0.32,0.23-0.46,0.37
		C33.32,52.44,33,53.21,33,54s0.32,1.56,0.88,2.12c0.14,0.14,0.29,0.27,0.46,0.37c0.16,0.11,0.33,0.21,0.51,0.28
		c0.18,0.08,0.37,0.13,0.56,0.17C35.61,56.98,35.81,57,36,57c0.79,0,1.56-0.32,2.12-0.88c0.14-0.14,0.27-0.29,0.38-0.45
		c0.1-0.17,0.2-0.34,0.27-0.52c0.08-0.18,0.13-0.37,0.17-0.56C38.98,54.39,39,54.2,39,54c0-0.79-0.32-1.56-0.88-2.12
		C37.43,51.18,36.39,50.86,35.41,51.06z"/>
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
