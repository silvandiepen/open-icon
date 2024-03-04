<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M36,6C19.46,6,6,17.44,6,31.5S19.46,57,36,57c2.39,0,4.75-0.24,7.05-0.71l10.54,10.54C54.85,68.09,57,67.2,57,65.41V49.72
			c5.74-4.78,9-11.34,9-18.22C66,17.44,52.54,6,36,6z M52.21,45.86L51,46.76v9l-6.09-6.09l-1.66,0.43C40.91,50.69,38.47,51,36,51
			c-13.23,0-24-8.75-24-19.5S22.77,12,36,12s24,8.75,24,19.5C60,36.93,57.16,42.17,52.21,45.86z"/>
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
