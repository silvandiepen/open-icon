<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M65.5,24h-14c-0.28,0-0.5,0.22-0.5,0.5V33h-8.5c-0.28,0-0.5,0.22-0.5,0.5V42h-8.5c-0.28,0-0.5,0.22-0.5,0.5V51h-8.5
		c-0.28,0-0.5,0.22-0.5,0.5v14c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V57h8.5c0.28,0,0.5-0.22,0.5-0.5V48h8.5
		c0.28,0,0.5-0.22,0.5-0.5V39h8.5c0.28,0,0.5-0.22,0.5-0.5V30h8.5c0.28,0,0.5-0.22,0.5-0.5v-5C66,24.22,65.78,24,65.5,24z"/>
	<path d="M13.15,39.89c0.2,0.2,0.51,0.2,0.71,0L33,20.74v8.76c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5v-16
		c0-1.66-1.34-3-3-3H20c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h8.76L9.61,35.65c-0.2,0.2-0.2,0.51,0,0.71L13.15,39.89z
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
