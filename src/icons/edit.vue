<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M49.56,12.54L49.56,12.54c-1.95-1.95-5.12-1.95-7.07,0L11.58,43.45L6.26,59.42c-0.6,1.81-0.14,3.77,1.21,5.12
		C8.42,65.49,9.69,66,10.99,66c0.53,0,1.07-0.09,1.59-0.26l15.97-5.32l30.91-30.91c0.94-0.94,1.46-2.2,1.46-3.54
		s-0.52-2.59-1.46-3.54L49.56,12.54z M18.45,45.07l21.21-21.21l8.49,8.49L26.93,53.55L18.45,45.07z M15.52,50.62l5.86,5.86
		l-8.79,2.93L15.52,50.62z M52.39,28.1l-8.49-8.49l2.12-2.12l8.49,8.49L52.39,28.1z"/>
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
