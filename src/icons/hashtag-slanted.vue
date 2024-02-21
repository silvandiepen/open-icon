<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M9.5,52.5h7.21l-1.59,9.51c-0.05,0.27,0.14,0.53,0.41,0.58l4.93,0.82c0.27,0.05,0.53-0.14,0.58-0.41l1.75-10.5h20.92
		l-1.59,9.51c-0.05,0.27,0.14,0.53,0.41,0.58l4.93,0.82c0.27,0.05,0.53-0.14,0.58-0.41l1.75-10.5H58c0.28,0,0.5-0.22,0.5-0.5v-5
		c0-0.28-0.22-0.5-0.5-0.5h-7.21l3.5-21h8.21c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5h-7.21l1.59-9.51
		c0.05-0.27-0.14-0.53-0.41-0.58l-4.93-0.82C51.26,8.54,51,8.73,50.96,9l-1.75,10.5H28.29l1.59-9.51c0.05-0.27-0.14-0.53-0.41-0.58
		l-4.93-0.82C24.26,8.54,24,8.73,23.96,9l-1.75,10.5H14c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h7.21l-3.5,21H9.5
		C9.22,46.5,9,46.72,9,47v5C9,52.28,9.22,52.5,9.5,52.5z M23.79,46.5l3.5-21h20.92l-3.5,21H23.79z"/>
</g>

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
