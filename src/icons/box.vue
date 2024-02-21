<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36.05,66.16L6,56.16V20.34l30-10l30,10v35.82L36.05,66.16z M12,51.84l24.05,8l23.95-8V24.66l-24-8l-24,8V51.84z"/>
<path d="M36,34.66L8.05,25.35c-1.57-0.52-2.42-2.22-1.9-3.79c0.52-1.57,2.22-2.42,3.79-1.9L36,28.34l26.05-8.68
	c1.57-0.52,3.27,0.33,3.79,1.9s-0.33,3.27-1.9,3.79L36,34.66z"/>
<path d="M36,66c-1.66,0-3-1.34-3-3V31.5c0-1.66,1.34-3,3-3s3,1.34,3,3V63C39,64.66,37.66,66,36,66z"/>
<path d="M22.5,43.5c-1.66,0-3-1.34-3-3V24.84l29.05-9.68c1.57-0.52,3.27,0.33,3.79,1.9c0.52,1.57-0.33,3.27-1.9,3.79L25.5,29.16
	V40.5C25.5,42.16,24.16,43.5,22.5,43.5z"/>

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
