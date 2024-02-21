<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M66,43.5H6V6h60V43.5z M12,37.5h48V12H12V37.5z"/>
<path d="M66,61.5H6v-24h60V61.5z M12,55.5h48v-12H12V55.5z"/>
<rect x="4.5" y="6" width="63" height="6"/>
<rect x="4.5" y="37.5" width="63" height="6"/>
<rect x="4.5" y="55.5" width="63" height="6"/>
<rect x="25" y="9" width="4" height="31.5"/>
<rect x="43" y="9" width="4" height="31.5"/>
<rect x="9" y="16" width="54" height="4"/>
<rect x="15" y="58.5" width="6" height="9"/>
<rect x="33" y="58.5" width="6" height="9"/>
<rect x="51" y="58.5" width="6" height="9"/>

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
