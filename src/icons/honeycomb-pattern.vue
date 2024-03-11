<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M60.2,14.04H48.68l-5.76-9.98H29.08l-5.76,9.98H11.8L4.89,26.02L10.65,36l-5.76,9.98l6.92,11.98h11.52l5.76,9.98h13.83
		l5.76-9.98H60.2l6.92-11.98L61.35,36l5.76-9.98L60.2,14.04z M62.49,26.02L57.89,34h-9.21l-2.3-3.99l-2.3-3.99l2.3-3.99l2.3-3.99
		h9.21L62.49,26.02z M31.39,43.98l-2.3-3.99L26.79,36l2.3-3.99l2.3-3.99h9.21l2.3,3.99l2.3,3.99l-2.3,3.99l-2.3,3.99H31.39z
		 M31.39,8.07h9.21l4.61,7.98l-2.3,3.99l-2.3,3.99h-9.21l-2.3-3.99l-2.3-3.99L31.39,8.07z M14.11,18.04h9.21l2.3,3.99l2.3,3.99
		l-2.3,3.99L23.32,34h-9.21l-4.61-7.98L14.11,18.04z M9.51,45.98L14.11,38h9.21l2.3,3.99l2.3,3.99l-2.3,3.99l-2.3,3.99h-9.21
		L9.51,45.98z M40.61,63.93h-9.21l-4.61-7.98l2.3-3.99l2.3-3.99h9.21l2.3,3.99l2.3,3.99L40.61,63.93z M57.89,53.96h-9.21l-2.3-3.99
		l-2.3-3.99l2.3-3.99l2.3-3.99h9.21l4.61,7.98L57.89,53.96z"/>
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
