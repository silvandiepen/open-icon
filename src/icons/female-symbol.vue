<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M31.5,57C22.4,57,15,49.6,15,40.5S22.4,24,31.5,24S48,31.4,48,40.5S40.6,57,31.5,57z M31.5,30C25.71,30,21,34.71,21,40.5
	S25.71,51,31.5,51S42,46.29,42,40.5S37.29,30,31.5,30z"/>
<g>
	<path d="M59.46,34.5h-5c-0.28,0-0.5-0.22-0.5-0.5V18.04H38c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h18.96
		c1.66,0,3,1.34,3,3V34C59.96,34.28,59.73,34.5,59.46,34.5z"/>
	<rect x="35.36" y="21.48" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -3.39 40.7725)" width="24.32" height="6"/>
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
