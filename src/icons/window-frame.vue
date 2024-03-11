<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M11,25.5h5c0.28,0,0.5-0.22,0.5-0.5v-8.5H25c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H13.5c-1.66,0-3,1.34-3,3
		V25C10.5,25.28,10.72,25.5,11,25.5z"/>
	<path d="M61,46.5h-5c-0.28,0-0.5,0.22-0.5,0.5v8.5H47c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h11.5c1.66,0,3-1.34,3-3
		V47C61.5,46.72,61.28,46.5,61,46.5z"/>
	<path d="M13.5,61.5H25c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5h-8.5V47c0-0.28-0.22-0.5-0.5-0.5h-5
		c-0.28,0-0.5,0.22-0.5,0.5v11.5C10.5,60.16,11.84,61.5,13.5,61.5z"/>
	<path d="M46.5,11v5c0,0.28,0.22,0.5,0.5,0.5h8.5V25c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V13.5c0-1.66-1.34-3-3-3H47
		C46.72,10.5,46.5,10.72,46.5,11z"/>
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
