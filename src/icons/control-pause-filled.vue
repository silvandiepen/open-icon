<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M20,54h9.5c1.1,0,2-0.9,2-2V20c0-1.1-0.9-2-2-2H20c-1.1,0-2,0.9-2,2v32C18,53.1,18.9,54,20,54z"/>
	<path d="M42.5,54H52c1.1,0,2-0.9,2-2V20c0-1.1-0.9-2-2-2h-9.5c-1.1,0-2,0.9-2,2v32C40.5,53.1,41.4,54,42.5,54z"/>
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
