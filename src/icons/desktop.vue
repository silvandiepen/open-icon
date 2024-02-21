<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,57H13c-3.86,0-7-3.14-7-7V13c0-3.86,3.14-7,7-7h46c3.86,0,7,3.14,7,7v37C66,53.86,62.86,57,59,57z M13,12
	c-0.55,0-1,0.45-1,1v37c0,0.55,0.45,1,1,1h46c0.55,0,1-0.45,1-1V13c0-0.55-0.45-1-1-1H13z"/>
<path d="M63,47H9c-1.1,0-2-0.9-2-2s0.9-2,2-2h54c1.1,0,2,0.9,2,2S64.1,47,63,47z"/>
<path d="M45,66H27c-1.66,0-3-1.34-3-3s1.34-3,3-3h18c1.66,0,3,1.34,3,3S46.66,66,45,66z"/>
<path d="M36,66c-1.66,0-3-1.34-3-3v-9c0-1.66,1.34-3,3-3s3,1.34,3,3v9C39,64.66,37.66,66,36,66z"/>

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
