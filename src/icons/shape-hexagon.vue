<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.19,7.5C53.65,6.57,52.66,6,51.59,6H20.41c-1.07,0-2.06,0.57-2.6,1.5l-15.59,27c-0.54,0.93-0.54,2.07,0,3l15.59,27
		c0.54,0.93,1.53,1.5,2.6,1.5h31.18c1.07,0,2.06-0.57,2.6-1.5l15.59-27c0.54-0.93,0.54-2.07,0-3L54.19,7.5z M49.86,60H22.14L8.29,36
		l13.86-24h27.71l13.86,24L49.86,60z"/>
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
