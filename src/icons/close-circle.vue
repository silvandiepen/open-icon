<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M26.65,48.89l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71l21.54-21.54c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71
	L27.35,48.89C27.16,49.08,26.84,49.08,26.65,48.89z"/>
<path d="M44.65,48.89L23.11,27.35c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0l21.54,21.54c0.2,0.2,0.2,0.51,0,0.71
	l-3.54,3.54C45.16,49.08,44.84,49.08,44.65,48.89z"/>
<path d="M36,66C19.46,66,6,52.54,6,36S19.46,6,36,6s30,13.46,30,30S52.54,66,36,66z M36,12c-13.23,0-24,10.77-24,24s10.77,24,24,24
	s24-10.77,24-24S49.23,12,36,12z"/>

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
