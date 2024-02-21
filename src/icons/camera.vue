<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M57,57H15c-4.96,0-9-4.04-9-9V24c0-4.96,4.04-9,9-9h42c4.96,0,9,4.04,9,9v24C66,52.96,61.96,57,57,57z M15,21
	c-1.65,0-3,1.35-3,3v24c0,1.65,1.35,3,3,3h42c1.65,0,3-1.35,3-3V24c0-1.65-1.35-3-3-3H15z"/>
<path d="M36,47c-6.07,0-11-4.93-11-11s4.93-11,11-11s11,4.93,11,11S42.07,47,36,47z M36,29c-3.86,0-7,3.14-7,7s3.14,7,7,7
	s7-3.14,7-7S39.86,29,36,29z"/>
<path d="M45,20H27c-1.1,0-2-0.9-2-2v-5c0-3.31,2.69-6,6-6h10c3.31,0,6,2.69,6,6v5C47,19.1,46.1,20,45,20z M29,16h14v-3
	c0-1.1-0.9-2-2-2H31c-1.1,0-2,0.9-2,2V16z"/>

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
