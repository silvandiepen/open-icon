<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M16,25.5h-5c-0.28,0-0.5-0.22-0.5-0.5V13.5c0-1.66,1.34-3,3-3H25c0.28,0,0.5,0.22,0.5,0.5v5c0,0.28-0.22,0.5-0.5,0.5h-8.5
		V25C16.5,25.28,16.28,25.5,16,25.5z"/>
</g>
<g>
	<path d="M58.5,61.5H47c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h8.5V47c0-0.28,0.22-0.5,0.5-0.5h5
		c0.28,0,0.5,0.22,0.5,0.5v11.5C61.5,60.16,60.16,61.5,58.5,61.5z"/>
</g>
<g>
	<path d="M25,61.5H13.5c-1.66,0-3-1.34-3-3V47c0-0.28,0.22-0.5,0.5-0.5h5c0.28,0,0.5,0.22,0.5,0.5v8.5H25c0.28,0,0.5,0.22,0.5,0.5v5
		C25.5,61.28,25.28,61.5,25,61.5z"/>
</g>
<g>
	<path d="M61,25.5h-5c-0.28,0-0.5-0.22-0.5-0.5v-8.5H47c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h11.5
		c1.66,0,3,1.34,3,3V25C61.5,25.28,61.28,25.5,61,25.5z"/>
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
