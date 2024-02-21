<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M54.5,66H34.43c-0.47,0-0.68-0.6-0.31-0.89l6.25-5c0.09-0.07,0.2-0.11,0.31-0.11H54.5c0.55,0,1-0.45,1-1V28.24L39.26,12
		H17.5c-0.55,0-1,0.45-1,1v22.82c0,0.11-0.04,0.22-0.11,0.31l-5,6.25c-0.3,0.37-0.89,0.16-0.89-0.31V13c0-3.87,3.13-7,7-7h24.24
		L61.5,25.76V59C61.5,62.87,58.37,66,54.5,66z"/>
	<path d="M60.5,29h-16c-3.31,0-6-2.69-6-6V7h4v16c0,1.1,0.9,2,2,2h16V29z"/>
</g>
<path d="M25,66h-5c-0.28,0-0.5-0.22-0.5-0.5v-23c0-0.28,0.22-0.5,0.5-0.5h5c0.28,0,0.5,0.22,0.5,0.5v23C25.5,65.78,25.28,66,25,66z"
	/>
<path d="M34,57H11c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h23c0.28,0,0.5,0.22,0.5,0.5v5C34.5,56.78,34.28,57,34,57z"
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
