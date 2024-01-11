<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M7.88,30h6v21h-1.5c-1.66,0-3,1.34-3,3s1.34,3,3,3h45c1.66,0,3-1.34,3-3s-1.34-3-3-3h-1.5V30h6c1.32,0,2.49-0.87,2.87-2.13
		c0.38-1.27-0.11-2.63-1.21-3.37l-27-18c-1.01-0.67-2.32-0.67-3.33,0l-27,18c-1.1,0.73-1.59,2.1-1.21,3.37
		C5.39,29.13,6.55,30,7.88,30z M19.88,30h3v21h-3V30z M40.88,30v21h-12V30H40.88z M49.88,51h-3V30h3V51z M34.88,12.61L51.97,24
		H17.78L34.88,12.61z"/>
	<path d="M7.88,66h54c1.66,0,3-1.34,3-3s-1.34-3-3-3h-54c-1.66,0-3,1.34-3,3S6.22,66,7.88,66z"/>
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
