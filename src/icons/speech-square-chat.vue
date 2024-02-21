<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M15,64.37V56.5h-2c-3.87,0-7-3.13-7-7V31c0-3.87,3.13-7,7-7h28c3.87,0,7,3.13,7,7v18.5c0,3.87-3.13,7-7,7h-8.59l-14.3,9.53
	C16.78,66.92,15,65.97,15,64.37z M13,30c-0.55,0-1,0.45-1,1v18.5c0,0.55,0.45,1,1,1h8v6.39l9.59-6.39H41c0.55,0,1-0.45,1-1V31
	c0-0.55-0.45-1-1-1H13z"/>
<path d="M58.39,48.03L43.34,38L46.66,33l8.84,5.89V32.5H59c0.55,0,1-0.45,1-1V13c0-0.55-0.45-1-1-1H31.5c-0.55,0-1,0.45-1,1v14h-6
	V13c0-3.87,3.13-7,7-7H59c3.87,0,7,3.13,7,7v18.5c0,2.98-1.87,5.53-4.5,6.54v8.33C61.5,47.97,59.72,48.92,58.39,48.03z"/>

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
