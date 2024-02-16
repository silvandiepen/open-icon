<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M34.6,5.58L8.96,22.67C5.67,24.87,7.22,30,11.18,30h2.7v21h-4c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h4h6h3h6
		h12h6h3h6h4c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5h-4V30h2.7c3.96,0,5.51-5.13,2.22-7.33L35.15,5.58
		C34.98,5.47,34.77,5.47,34.6,5.58z M22.88,51h-3V30h3V51z M40.88,51h-12V30h12V51z M49.88,51h-3V30h3V51z M49.88,24h-3h-6h-12h-6
		h-3h-2.09l17.09-11.39L51.97,24H49.88z"/>
	<path d="M5.38,66h59c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5h-59c-0.28,0-0.5,0.22-0.5,0.5v5
		C4.88,65.78,5.1,66,5.38,66z"/>
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
