<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M63,66H9c-1.66,0-3-1.34-3-3V9c0-1.66,1.34-3,3-3h54c1.66,0,3,1.34,3,3v54C66,64.66,64.66,66,63,66z M12,60h48V12H12V60z"/>
<path d="M18,65c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2s2,0.9,2,2v54C20,64.1,19.1,65,18,65z"/>
<path d="M54,65c-1.1,0-2-0.9-2-2V9c0-1.1,0.9-2,2-2s2,0.9,2,2v54C56,64.1,55.1,65,54,65z"/>
<path d="M63,38H9c-1.1,0-2-0.9-2-2s0.9-2,2-2h54c1.1,0,2,0.9,2,2S64.1,38,63,38z"/>
<path d="M18,29H9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S19.1,29,18,29z"/>
<path d="M18,20H9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S19.1,20,18,20z"/>
<path d="M18,47H9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S19.1,47,18,47z"/>
<path d="M18,56H9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S19.1,56,18,56z"/>
<path d="M63,56h-9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S64.1,56,63,56z"/>
<path d="M63,47h-9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S64.1,47,63,47z"/>
<path d="M63,29h-9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S64.1,29,63,29z"/>
<path d="M63,20h-9c-1.1,0-2-0.9-2-2s0.9-2,2-2h9c1.1,0,2,0.9,2,2S64.1,20,63,20z"/>

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
