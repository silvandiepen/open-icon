<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M48.59,5.17L29.76,24H19.5c-0.28,0-0.5,0.22-0.5,0.5v23c0,0.28,0.22,0.5,0.5,0.5h10.26l18.83,18.83
			C49.85,68.09,52,67.2,52,65.41V6.59C52,4.8,49.85,3.91,48.59,5.17z M46,55.76L32.24,42H25V30h7.24L46,16.24V55.76z"/>
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
