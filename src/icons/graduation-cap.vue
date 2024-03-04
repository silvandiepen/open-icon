<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M34.66,15.32l-22.5,11.25c-1.02,0.51-1.66,1.55-1.66,2.68s0.64,2.18,1.66,2.68l7.34,3.67v13.9c0,0.8,0.32,1.56,0.88,2.12
			C20.6,51.84,25.87,57,36,57s15.4-5.16,15.62-5.38c0.56-0.56,0.88-1.33,0.88-2.12V35.6l4-2V45c0,1.1,0.9,2,2,2s2-0.9,2-2V31.5
			c0-0.01,0-0.01,0-0.02c0.63-0.56,1-1.37,1-2.23c0-1.14-0.64-2.18-1.66-2.68l-22.5-11.25C36.5,14.89,35.5,14.89,34.66,15.32z
			 M46.5,48.07C44.97,49.13,41.5,51,36,51c-5.51,0-8.98-1.88-10.5-2.93V38.6l9.16,4.58c0.42,0.21,0.88,0.32,1.34,0.32
			s0.92-0.11,1.34-0.32l9.16-4.58V48.07z M36,37.15l-15.79-7.9L36,21.35l15.79,7.9L36,37.15z"/>
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
