<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.5,66H40.68c-0.11,0-0.22-0.04-0.31-0.11l-6.25-5C33.74,60.6,33.95,60,34.43,60H54.5c0.55,0,1-0.45,1-1V28.24L39.26,12
		H17.5c-0.55,0-1,0.45-1,1v29.07c0,0.47-0.6,0.68-0.89,0.31l-5-6.25c-0.07-0.09-0.11-0.2-0.11-0.31V13c0-3.87,3.13-7,7-7h24.24
		L61.5,25.76V59C61.5,62.87,58.37,66,54.5,66z"/>
	<path d="M60.5,29h-16c-3.31,0-6-2.69-6-6V7h4v16c0,1.1,0.9,2,2,2h16V29z"/>
</g>
<path d="M13.15,66.89l-3.54-3.54c-0.2-0.2-0.2-0.51,0-0.71l17.04-17.04c0.2-0.2,0.51-0.2,0.71,0l3.54,3.54c0.2,0.2,0.2,0.51,0,0.71
	L13.85,66.89C13.66,67.08,13.34,67.08,13.15,66.89z"/>
<path d="M26.65,66.89L9.61,49.85c-0.2-0.2-0.2-0.51,0-0.71l3.54-3.54c0.2-0.2,0.51-0.2,0.71,0l17.04,17.04c0.2,0.2,0.2,0.51,0,0.71
	l-3.54,3.54C27.16,67.08,26.84,67.08,26.65,66.89z"/>

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
