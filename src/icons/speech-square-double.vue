<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M19.5,64.37V56.5H13c-3.87,0-7-3.13-7-7v-23c0-3.87,3.13-7,7-7h37c3.87,0,7,3.13,7,7v23c0,3.87-3.13,7-7,7H36.91l-14.3,9.53
	C21.28,66.92,19.5,65.97,19.5,64.37z M13,25.5c-0.55,0-1,0.45-1,1v23c0,0.55,0.45,1,1,1h12.5v6.39l9.59-6.39H50c0.55,0,1-0.45,1-1
	v-23c0-0.55-0.45-1-1-1H13z"/>
<path d="M59,47h-5v-4h5c1.1,0,2-0.9,2-2V18c0-1.1-0.9-2-2-2H22c-1.1,0-2,0.9-2,2v4.5h-4V18c0-3.31,2.69-6,6-6h37c3.31,0,6,2.69,6,6
	v23C65,44.31,62.31,47,59,47z"/>

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
