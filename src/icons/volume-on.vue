<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M16.76,48l17.12,17.12C34.45,65.7,35.22,66,36,66c0.39,0,0.78-0.07,1.15-0.23C38.27,65.31,39,64.21,39,63V9
		c0-1.21-0.73-2.31-1.85-2.77c-1.12-0.46-2.41-0.21-3.27,0.65L16.76,24H9c-1.66,0-3,1.34-3,3v18c0,1.66,1.34,3,3,3H16.76z M12,30h6
		c0.8,0,1.56-0.32,2.12-0.88L33,16.24v39.51L20.12,42.88C19.56,42.32,18.8,42,18,42h-6V30z"/>
	<path d="M45,40.15c-1.1,0-2,0.9-2,2s0.9,2,2,2c4.49,0,8.15-3.66,8.15-8.15s-3.66-8.15-8.15-8.15c-1.1,0-2,0.9-2,2s0.9,2,2,2
		c2.29,0,4.15,1.86,4.15,4.15S47.29,40.15,45,40.15z"/>
	<path d="M45,56c11.03,0,20-8.97,20-20s-8.97-20-20-20c-1.1,0-2,0.9-2,2s0.9,2,2,2c8.82,0,16,7.18,16,16s-7.18,16-16,16
		c-1.1,0-2,0.9-2,2S43.9,56,45,56z"/>
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
