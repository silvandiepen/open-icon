<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M22.5,57c1.66,0,3-1.34,3-3V18c0-1.66-1.34-3-3-3s-3,1.34-3,3v15H14c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5
			h5.5v15C19.5,55.66,20.84,57,22.5,57z"/>
	</g>
	<g>
		<path d="M31.5,15c-1.66,0-3,1.34-3,3v36c0,1.66,1.34,3,3,3s3-1.34,3-3V18C34.5,16.34,33.16,15,31.5,15z"/>
	</g>
	<g>
		<path d="M37.5,54c0,1.66,1.34,3,3,3s3-1.34,3-3V18c0-1.66-1.34-3-3-3s-3,1.34-3,3V54z"/>
	</g>
	<g>
		<path d="M47,57h5c0.28,0,0.5-0.22,0.5-0.5v-16v-3V18c0-1.66-1.34-3-3-3s-3,1.34-3,3v19.5v3v16C46.5,56.78,46.72,57,47,57z"/>
	</g>
	<g>
		<path d="M46.5,62.5c0,0.28,0.22,0.5,0.5,0.5h5c0.28,0,0.5-0.22,0.5-0.5V59c0-0.28-0.22-0.5-0.5-0.5h-5c-0.28,0-0.5,0.22-0.5,0.5
			V62.5z"/>
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
