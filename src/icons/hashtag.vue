<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25,63h-5c-0.28,0-0.5-0.22-0.5-0.5v-53C19.5,9.22,19.72,9,20,9h5c0.28,0,0.5,0.22,0.5,0.5v53C25.5,62.78,25.28,63,25,63z"
		/>
</g>
<g>
	<path d="M52,63h-5c-0.28,0-0.5-0.22-0.5-0.5v-53C46.5,9.22,46.72,9,47,9h5c0.28,0,0.5,0.22,0.5,0.5v53C52.5,62.78,52.28,63,52,63z"
		/>
</g>
<g>
	<path d="M62.5,52.5h-53C9.22,52.5,9,52.28,9,52v-5c0-0.28,0.22-0.5,0.5-0.5h53c0.28,0,0.5,0.22,0.5,0.5v5
		C63,52.28,62.78,52.5,62.5,52.5z"/>
</g>
<g>
	<path d="M62.5,25.5h-53C9.22,25.5,9,25.28,9,25v-5c0-0.28,0.22-0.5,0.5-0.5h53c0.28,0,0.5,0.22,0.5,0.5v5
		C63,25.28,62.78,25.5,62.5,25.5z"/>
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
