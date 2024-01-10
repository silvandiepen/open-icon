<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M26,59h20c6.07,0,11-4.93,11-11V34c0-0.8-0.32-1.56-0.88-2.12l-18-18c-1.17-1.17-3.07-1.17-4.24,0l-18,18
		C15.32,32.44,15,33.2,15,34v14C15,54.07,19.93,59,26,59z M21,35.24l15-15l15,15V48c0,2.76-2.24,5-5,5H26c-2.76,0-5-2.24-5-5V35.24z
		"/>
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
