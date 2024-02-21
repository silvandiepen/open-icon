<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M20,45h-3.5c-0.28,0-0.5-0.22-0.5-0.5v-8c0-0.28,0.22-0.5,0.5-0.5H20V45z"/>
</g>
<path d="M56.68,59.48L12.36,10.72c-0.19-0.2-0.17-0.52,0.03-0.71l2.22-2.02c0.2-0.19,0.52-0.17,0.71,0.03l44.33,48.76
	c0.19,0.2,0.17,0.52-0.03,0.71l-2.22,2.02C57.19,59.7,56.87,59.68,56.68,59.48z"/>
<g>
	<path d="M32.7,22.2c2.01-0.75,3.58-1.89,4.68-3.41c2.36-3.28,1.69-7.21,1.35-8.6c-0.07-0.28-0.36-0.44-0.64-0.35l-2.86,0.94
		c-0.24,0.08-0.39,0.32-0.33,0.57c0.21,0.95,0.54,3.31-0.77,5.11c-0.86,1.18-2.36,1.99-4.42,2.43L32.7,22.2z"/>
	<path d="M17.24,21.03c-1.31,0.7-2.37,1.62-3.18,2.74c-2.36,3.28-1.69,7.21-1.35,8.6c0.07,0.28,0.36,0.44,0.64,0.35l2.86-0.94
		c0.24-0.08,0.39-0.32,0.33-0.57c-0.21-0.95-0.54-3.31,0.77-5.11c0.61-0.83,1.54-1.47,2.76-1.94L17.24,21.03z"/>
</g>
<g>
	<path d="M53.43,45H58c0.28,0,0.5-0.22,0.5-0.5v-8c0-0.28-0.22-0.5-0.5-0.5H45.25L53.43,45z"/>
	<polygon points="30.84,36 22.5,36 22.5,45 39.02,45 	"/>
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
