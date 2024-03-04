<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M21.25,36.29c0.2,0.2,0.51,0.2,0.71,0L33,25.24V56.5c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V25.24
			l11.05,11.05c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54c0.2-0.2,0.2-0.51,0-0.71L38.12,15.88c-1.17-1.17-3.07-1.17-4.24,0L17.71,32.05
			c-0.2,0.2-0.2,0.51,0,0.71L21.25,36.29z"/>
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
