<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M32.05,54.29c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54c0.2-0.2,0.2-0.51,0-0.71L25.24,39H56.5c0.28,0,0.5-0.22,0.5-0.5v-5
			c0-0.28-0.22-0.5-0.5-0.5H25.24l11.05-11.05c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54c-0.2-0.2-0.51-0.2-0.71,0L15.88,33.88
			c-1.17,1.17-1.17,3.07,0,4.24L32.05,54.29z"/>
	</g>
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
