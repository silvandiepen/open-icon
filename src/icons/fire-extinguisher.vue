<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M38.5,61.5H20c-0.28,0-0.5-0.22-0.5-0.5l0-31.41c0-5.19,3.91-9.73,9.08-10.07C34.26,19.14,39,23.65,39,29.25V61
	C39,61.28,38.78,61.5,38.5,61.5z M25.5,55.5H33V29.25c0-2.07-1.68-3.75-3.75-3.75s-3.75,1.68-3.75,3.75V55.5z"/>
<path d="M47.5,54h-5c-0.28,0-0.5-0.23-0.5-0.51c0-8.84,0.09-13.88,4.82-23.33c1.84-3.69,1.93-7.53,0.24-10.28
	c-1.35-2.18-3.67-3.38-6.55-3.38H23c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h17.5c4.96,0,9.21,2.27,11.66,6.23
	c2.8,4.53,2.81,10.55,0.03,16.11C48.08,41.05,48,45.06,48,53.49C48,53.77,47.78,54,47.5,54z"/>
<rect x="26.25" y="13.5" width="6" height="9"/>

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
