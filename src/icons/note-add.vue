<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M25,66h-5c-0.28,0-0.5-0.22-0.5-0.5v-23c0-0.28,0.22-0.5,0.5-0.5h5c0.28,0,0.5,0.22,0.5,0.5v23C25.5,65.78,25.28,66,25,66z"
	/>
<path d="M34,57H11c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h23c0.28,0,0.5,0.22,0.5,0.5v5C34.5,56.78,34.28,57,34,57z"
	/>
<g>
	<path d="M54.5,66h-21c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h21c0.55,0,1-0.45,1-1V17.5c0-0.55-0.45-1-1-1h-37
		c-0.55,0-1,0.45-1,1V43c0,0.28-0.22,0.5-0.5,0.5h-5c-0.28,0-0.5-0.22-0.5-0.5V17.5c0-3.87,3.13-7,7-7h37c3.87,0,7,3.13,7,7V59
		C61.5,62.87,58.37,66,54.5,66z"/>
</g>
<path d="M24,20h-3c-0.28,0-0.5-0.22-0.5-0.5v-12C20.5,7.22,20.72,7,21,7h3c0.28,0,0.5,0.22,0.5,0.5v12C24.5,19.78,24.28,20,24,20z"
	/>
<path d="M33,20h-3c-0.28,0-0.5-0.22-0.5-0.5v-12C29.5,7.22,29.72,7,30,7h3c0.28,0,0.5,0.22,0.5,0.5v12C33.5,19.78,33.28,20,33,20z"
	/>
<path d="M42,20h-3c-0.28,0-0.5-0.22-0.5-0.5v-12C38.5,7.22,38.72,7,39,7h3c0.28,0,0.5,0.22,0.5,0.5v12C42.5,19.78,42.28,20,42,20z"
	/>
<path d="M51,20h-3c-0.28,0-0.5-0.22-0.5-0.5v-12C47.5,7.22,47.72,7,48,7h3c0.28,0,0.5,0.22,0.5,0.5v12C51.5,19.78,51.28,20,51,20z"
	/>

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
