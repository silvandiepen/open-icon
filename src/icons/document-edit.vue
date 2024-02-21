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
<path d="M22.5,66h-9c-1.66,0-3-1.34-3-3v-9c0-0.8,0.32-1.56,0.88-2.12l18-18c1.17-1.17,3.07-1.17,4.24,0l9,9
	c1.17,1.17,1.17,3.07,0,4.24l-18,18C24.06,65.68,23.3,66,22.5,66z M16.5,60h4.76l15-15l-4.76-4.76l-15,15V60z"/>
<path d="M22.5,65c-1.1,0-2-0.9-2-2c0-3.86-3.14-7-7-7c-1.1,0-2-0.9-2-2s0.9-2,2-2c6.07,0,11,4.93,11,11C24.5,64.1,23.6,65,22.5,65z"
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
