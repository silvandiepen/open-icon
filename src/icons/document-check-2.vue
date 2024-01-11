<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M42.5,15.24L52.26,25H44.5
		c-1.1,0-2-0.9-2-2V15.24z M54.5,60h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11v30
		C55.5,59.55,55.05,60,54.5,60z"/>
	<path d="M46.34,33.32c-1.48-0.74-3.28-0.14-4.02,1.34l-7.14,14.28l-6.06-6.06c-1.17-1.17-3.07-1.17-4.24,0
		c-1.17,1.17-1.17,3.07,0,4.24l11.94,11.94l10.86-21.72C48.42,35.86,47.82,34.06,46.34,33.32z"/>
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
