<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M36.36,15C24.5,14.8,14.8,24.5,15,36.36C15.2,47.9,24.94,57,36.48,57h2.02c0.28,0,0.5-0.22,0.5-0.5v-5
			c0-0.28-0.22-0.5-0.5-0.5h-2.09c-7.94,0-14.81-6-15.37-13.92c-0.64-9.12,6.92-16.68,16.04-16.04C45,21.6,51,28.47,51,36.41v1.35
			l-5.65-5.65c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71l10.77,10.77C52.46,47.71,53.23,48,54,48
			s1.54-0.29,2.12-0.88l10.77-10.77c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54c-0.2-0.2-0.51-0.2-0.71,0L57,37.76v-1.27
			C57,24.94,47.9,15.2,36.36,15z"/>
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
