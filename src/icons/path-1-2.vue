<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<circle cx="36" cy="53.75" r="6.75"/>
<circle cx="36" cy="18" r="4.5"/>
<circle cx="54" cy="31.5" r="4.5"/>
<line x1="36" y1="22.5" x2="36" y2="47"/>
<circle cx="18" cy="31.5" r="4.5"/>
<path d="M18,36v9c0,4.97,4.03,9,9,9
	h2.25"/>
<path d="M54,36v9c0,4.97-4.03,9-9,9
	h-2.25"/>

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
