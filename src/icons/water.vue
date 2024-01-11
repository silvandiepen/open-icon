<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M38.12,6.88c-1.17-1.17-3.07-1.17-4.24,0C33.11,7.65,15,25.98,15,45c0,11.58,9.42,21,21,21c11.58,0,21-9.42,21-21
	C57,25.98,38.89,7.65,38.12,6.88z M36,60c-8.27,0-15-6.73-15-15c0-12.95,10.41-26.31,15-31.56C40.58,18.69,51,32.05,51,45
	C51,53.27,44.27,60,36,60z"/>

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
