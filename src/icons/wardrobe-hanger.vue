<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M62,57H10c-2.21,0-4-1.79-4-4v-5.53c0-2.67,1.48-5.07,3.87-6.26L36,28.15l26.13,13.07C64.52,42.41,66,44.8,66,47.47V53
	C66,55.21,64.21,57,62,57z M12,51h48v-3.53c0-0.38-0.21-0.72-0.55-0.89L36,34.85L12.55,46.58C12.21,46.75,12,47.09,12,47.47V51z"/>
<path d="M38.12,33.62l-4.24-4.24l5.29-5.29c1.3-1.3,1.63-3.29,0.8-4.94L39.9,19c-0.62-1.24-1.76-2.2-3.12-2.44
	c-1.93-0.34-3.76,0.61-4.61,2.3l-2.26,4.53c-0.12,0.25-0.42,0.35-0.67,0.22l-4.47-2.24c-0.25-0.12-0.35-0.42-0.22-0.67l2.11-4.22
	c1.7-3.4,5.05-5.8,8.84-5.98c4.12-0.2,7.87,2.02,9.7,5.67l0.14,0.28c1.98,3.96,1.2,8.74-1.93,11.87L38.12,33.62z"/>

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
