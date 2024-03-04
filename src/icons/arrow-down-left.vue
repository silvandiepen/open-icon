<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M52.62,22.92l-3.54-3.54c-0.2-0.2-0.51-0.2-0.71,0l-22.1,22.1V25.86c0-0.28-0.22-0.5-0.5-0.5h-5c-0.28,0-0.5,0.22-0.5,0.5
			v22.86c0,1.66,1.34,3,3,3h22.86c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H30.51l22.1-22.1
			C52.81,23.43,52.81,23.11,52.62,22.92z"/>
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
