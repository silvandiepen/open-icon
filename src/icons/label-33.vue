<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M46,6H26c-6.08,0-11,4.92-11,11v50.04c0,0.37,0.39,0.61,0.72,0.45L36,57.35l20.28,10.14c0.33,0.17,0.72-0.08,0.72-0.45V17
			C57,10.92,52.08,6,46,6z M51,58.15l-14.78-7.39c-0.14-0.07-0.31-0.07-0.45,0L21,58.15V17c0-2.76,2.24-5,5-5h20c2.76,0,5,2.24,5,5
			V58.15z"/>
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
