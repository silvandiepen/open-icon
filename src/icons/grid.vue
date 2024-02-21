<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,66H13c-3.86,0-7-3.14-7-7V13c0-3.86,3.14-7,7-7h46c3.86,0,7,3.14,7,7v46C66,62.86,62.86,66,59,66z M13,12
	c-0.55,0-1,0.45-1,1v46c0,0.55,0.45,1,1,1h46c0.55,0,1-0.45,1-1V13c0-0.55-0.45-1-1-1H13z"/>
<rect x="25" y="7" width="4" height="58"/>
<rect x="43" y="7" width="4" height="58"/>
<rect x="7" y="43" width="58" height="4"/>
<rect x="7" y="25" width="58" height="4"/>

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
