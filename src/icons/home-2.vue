<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M46,59H26c-6.07,0-11-4.93-11-11V34c0-0.8,0.32-1.56,0.88-2.12l18-18c1.17-1.17,3.07-1.17,4.24,0l18,18
	C56.68,32.44,57,33.2,57,34v14C57,54.07,52.07,59,46,59z M21,35.24V48c0,2.76,2.24,5,5,5h20c2.76,0,5-2.24,5-5V35.24l-15-15
	L21,35.24z"/>

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
