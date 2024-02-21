<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M29.5,34.5h-23C6.22,34.5,6,34.28,6,34V11c0-0.28,0.22-0.5,0.5-0.5h23c0.28,0,0.5,0.22,0.5,0.5v23
		C30,34.28,29.78,34.5,29.5,34.5z M12,28.5h12v-12H12V28.5z"/>
	<path d="M65.5,34.5h-32c-0.28,0-0.5-0.22-0.5-0.5V11c0-0.28,0.22-0.5,0.5-0.5h32c0.28,0,0.5,0.22,0.5,0.5v23
		C66,34.28,65.78,34.5,65.5,34.5z M39,28.5h21v-12H39V28.5z"/>
	<path d="M47.5,61.5h-41C6.22,61.5,6,61.28,6,61V38c0-0.28,0.22-0.5,0.5-0.5h41c0.28,0,0.5,0.22,0.5,0.5v23
		C48,61.28,47.78,61.5,47.5,61.5z M12,55.5h30v-12H12V55.5z"/>
	<path d="M65.5,61.5h-14c-0.28,0-0.5-0.22-0.5-0.5V38c0-0.28,0.22-0.5,0.5-0.5h14c0.28,0,0.5,0.22,0.5,0.5v23
		C66,61.28,65.78,61.5,65.5,61.5z M57,55.5h3v-12h-3V55.5z"/>
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
