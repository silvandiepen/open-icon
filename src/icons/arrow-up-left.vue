<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M46.64,23.27c0-1.66-1.34-3-3-3H23.27c-0.2,0-0.39,0.02-0.59,0.06c-0.09,0.02-0.17,0.05-0.25,0.08
		c-0.1,0.03-0.21,0.05-0.31,0.1c-0.1,0.04-0.19,0.1-0.29,0.15c-0.08,0.04-0.16,0.08-0.23,0.12c-0.33,0.22-0.61,0.5-0.83,0.83
		c-0.05,0.07-0.08,0.15-0.12,0.22c-0.05,0.1-0.11,0.19-0.15,0.29c-0.04,0.1-0.06,0.2-0.09,0.3c-0.03,0.09-0.06,0.17-0.08,0.26
		c-0.04,0.19-0.06,0.39-0.06,0.59v20.36c0,1.66,1.34,3,3,3s3-1.34,3-3V30.51l20.33,20.33c0.59,0.59,1.35,0.88,2.12,0.88
		s1.54-0.29,2.12-0.88c1.17-1.17,1.17-3.07,0-4.24L30.51,26.27h13.12C45.29,26.27,46.64,24.93,46.64,23.27z"/>
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
