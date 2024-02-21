<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M30.07,56.88c-1.69-0.42-3.33-1.08-4.84-1.95c-12.59-7.27-14.13-23.71-4.62-33.23C34.24,8.06,57.18,11.16,58.15,11.3
		l1.86,0.26c0.22,0.03,0.39,0.2,0.42,0.42l0.27,1.86c0.14,0.97,3.24,23.91-10.39,37.55l0,0c0,0,0,0,0,0
		C45.09,56.61,37.6,58.75,30.07,56.88z M51.55,16.93c-7.04,0-18.97,1.28-26.7,9.01c-2.83,2.83-4.39,6.6-4.39,10.61
		c0,4.01,1.56,7.77,4.39,10.61c2.83,2.83,6.6,4.39,10.61,4.39s7.77-1.56,10.61-4.39v0c9.2-9.2,9.26-24.34,8.91-30.12
		C54.05,16.97,52.88,16.93,51.55,16.93z"/>
	<path d="M11.06,63.06l-2.12-2.12c-0.2-0.2-0.2-0.51,0-0.71l31.11-31.11c0.2-0.2,0.51-0.2,0.71,0l2.12,2.12c0.2,0.2,0.2,0.51,0,0.71
		L11.77,63.06C11.57,63.26,11.26,63.26,11.06,63.06z"/>
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
