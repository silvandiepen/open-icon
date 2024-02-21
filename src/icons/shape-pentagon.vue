<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M53.61,66.1H18.39c-1.3,0-2.45-0.84-2.85-2.07L4.65,30.53c-0.4-1.24,0.04-2.59,1.09-3.35l28.5-20.7
	c1.05-0.76,2.48-0.76,3.53,0l28.5,20.7c1.05,0.76,1.49,2.12,1.09,3.35l-10.88,33.5C56.06,65.26,54.91,66.1,53.61,66.1z M20.57,60.1
	h30.86l9.54-29.35L36,12.61L11.03,30.75L20.57,60.1z"/>

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
