<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M46,6H26c-6.07,0-11,4.93-11,11v46c0,1.04,0.54,2.01,1.42,2.55c0.88,0.55,1.99,0.6,2.92,0.13L36,57.35l16.66,8.33
		C53.08,65.9,53.54,66,54,66c0.55,0,1.1-0.15,1.58-0.45C56.46,65.01,57,64.04,57,63V17C57,10.93,52.07,6,46,6z M51,58.15
		l-13.66-6.83C36.92,51.11,36.46,51,36,51s-0.92,0.11-1.34,0.32L21,58.15V17c0-2.76,2.24-5,5-5h20c2.76,0,5,2.24,5,5V58.15z"/>
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
