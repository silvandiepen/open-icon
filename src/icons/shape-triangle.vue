<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M67.85,62.83c0.54-0.93,0.54-2.07,0-3L38.6,9.17c-0.54-0.93-1.53-1.5-2.6-1.5s-2.06,0.57-2.6,1.5L4.15,59.83
			c-0.54,0.93-0.54,2.07,0,3c0.54,0.93,1.53,1.5,2.6,1.5h58.5C66.32,64.33,67.31,63.76,67.85,62.83z M11.95,58.33L36,16.67
			l24.05,41.66H11.95z"/>
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
