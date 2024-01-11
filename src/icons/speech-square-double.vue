<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,12H22c-3.31,0-6,2.69-6,6v1.5h-3c-3.86,0-7,3.14-7,7v23c0,3.86,3.14,7,7,7h6.5v11.61L36.91,56.5H50c3.86,0,7-3.14,7-7
	V47h2c3.31,0,6-2.69,6-6V18C65,14.69,62.31,12,59,12z M51,49.5c0,0.55-0.45,1-1,1H35.09l-9.59,6.39V50.5H13c-0.55,0-1-0.45-1-1v-23
	c0-0.55,0.45-1,1-1h37c0.55,0,1,0.45,1,1V49.5z M61,41c0,1.1-0.9,2-2,2h-2V26.5c0-3.86-3.14-7-7-7H20V18c0-1.1,0.9-2,2-2h37
	c1.1,0,2,0.9,2,2V41z"/>

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
