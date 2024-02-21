<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M53.59,66.83L43.05,56.29C40.75,56.76,38.39,57,36,57C19.46,57,6,45.56,6,31.5S19.46,6,36,6s30,11.44,30,25.5
	c0,6.88-3.26,13.44-9,18.22v15.69C57,67.2,54.85,68.09,53.59,66.83z M44.91,49.66L51,55.76v-9l1.21-0.9
	C57.16,42.17,60,36.93,60,31.5C60,20.75,49.23,12,36,12s-24,8.75-24,19.5S22.77,51,36,51c2.47,0,4.91-0.31,7.25-0.91L44.91,49.66z"
	/>

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
