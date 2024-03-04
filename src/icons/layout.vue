<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M6.5,34.5h23c0.28,0,0.5-0.22,0.5-0.5V11c0-0.28-0.22-0.5-0.5-0.5h-23C6.22,10.5,6,10.72,6,11v23
			C6,34.28,6.22,34.5,6.5,34.5z M12,16.5h12v12H12V16.5z"/>
	</g>
	<g>
		<path d="M66,11c0-0.28-0.22-0.5-0.5-0.5h-32c-0.28,0-0.5,0.22-0.5,0.5v23c0,0.28,0.22,0.5,0.5,0.5h32c0.28,0,0.5-0.22,0.5-0.5V11z
			 M60,28.5H39v-12h21V28.5z"/>
	</g>
	<g>
		<path d="M6.5,61.5h41c0.28,0,0.5-0.22,0.5-0.5V38c0-0.28-0.22-0.5-0.5-0.5h-41C6.22,37.5,6,37.72,6,38v23
			C6,61.28,6.22,61.5,6.5,61.5z M12,43.5h30v12H12V43.5z"/>
	</g>
	<g>
		<path d="M65.5,37.5h-14c-0.28,0-0.5,0.22-0.5,0.5v23c0,0.28,0.22,0.5,0.5,0.5h14c0.28,0,0.5-0.22,0.5-0.5V38
			C66,37.72,65.78,37.5,65.5,37.5z M60,55.5h-3v-12h3V55.5z"/>
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
