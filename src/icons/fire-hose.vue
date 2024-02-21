<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M22.5,57c-1.66,0-3-1.34-3-3V18c0-1.66,1.34-3,3-3s3,1.34,3,3v36C25.5,55.66,24.16,57,22.5,57z"/>
</g>
<g>
	<path d="M31.5,57c-1.66,0-3-1.34-3-3V18c0-1.66,1.34-3,3-3s3,1.34,3,3v36C34.5,55.66,33.16,57,31.5,57z"/>
</g>
<g>
	<path d="M40.5,57c-1.66,0-3-1.34-3-3V18c0-1.66,1.34-3,3-3s3,1.34,3,3v36C43.5,55.66,42.16,57,40.5,57z"/>
</g>
<g>
	<path d="M49.5,43.5c-1.66,0-3-1.34-3-3V18c0-1.66,1.34-3,3-3s3,1.34,3,3v22.5C52.5,42.16,51.16,43.5,49.5,43.5z"/>
</g>
<g>
	<path d="M52,57h-5c-0.28,0-0.5-0.22-0.5-0.5v-19h6v19C52.5,56.78,52.28,57,52,57z"/>
</g>
<g>
	<path d="M52,63h-5c-0.28,0-0.5-0.22-0.5-0.5V59c0-0.28,0.22-0.5,0.5-0.5h5c0.28,0,0.5,0.22,0.5,0.5v3.5C52.5,62.78,52.28,63,52,63z
		"/>
</g>
<g>
	<path d="M22.5,39H14c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h8.5V39z"/>
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
