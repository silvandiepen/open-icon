<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M54.25,61.5h-30c-3.86,0-7-3.14-7-7v-37c0-3.86,3.14-7,7-7h30c3.86,0,7,3.14,7,7v37C61.25,58.36,58.11,61.5,54.25,61.5z
	 M24.25,16.5c-0.55,0-1,0.45-1,1v37c0,0.55,0.45,1,1,1h30c0.55,0,1-0.45,1-1v-37c0-0.55-0.45-1-1-1H24.25z"/>
<path d="M26.75,48v3c0,0.28-0.22,0.5-0.5,0.5h-12c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h12
	C26.53,47.5,26.75,47.72,26.75,48z"/>
<path d="M26.75,39v3c0,0.28-0.22,0.5-0.5,0.5h-12c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h12
	C26.53,38.5,26.75,38.72,26.75,39z"/>
<path d="M26.75,30v3c0,0.28-0.22,0.5-0.5,0.5h-12c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h12
	C26.53,29.5,26.75,29.72,26.75,30z"/>
<path d="M26.75,21v3c0,0.28-0.22,0.5-0.5,0.5h-12c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h12
	C26.53,20.5,26.75,20.72,26.75,21z"/>

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
