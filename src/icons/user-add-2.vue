<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<circle cx="36" cy="24.75" r="11.25"/>
<path d="
	M55.29,55.29C55.29,63,36,63,36,63s-19.29,0-19.29-7.71C16.71,44.63,25.35,36,36,36S55.29,44.63,55.29,55.29z"/>
<line x1="30.31" y1="50.69" x2="41.69" y2="50.69"/>
<line x1="36" y1="45" x2="36" y2="56.39"/>

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
