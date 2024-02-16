<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M26.5,6c-3.86,0-7,3.14-7,7v2h-2c-3.86,0-7,3.14-7,7v37c0,3.86,3.14,7,7,7h28c3.86,0,7-3.14,7-7v-2h2c3.86,0,7-3.14,7-7
		V25.76L41.74,6H26.5z M46.5,59c0,0.55-0.45,1-1,1h-28c-0.55,0-1-0.45-1-1V22c0-0.55,0.45-1,1-1h2v29c0,3.86,3.14,7,7,7h20V59z
		 M55.5,50c0,0.55-0.45,1-1,1h-28c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h12v11c0,3.31,2.69,6,6,6h11V50z M42.5,15.24L52.26,25
		H44.5c-1.1,0-2-0.9-2-2V15.24z"/>
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
