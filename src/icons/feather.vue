<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M37.21,56.89c-0.2,0-0.39-0.02-0.59-0.06l-15.91-3.18c-1.19-0.24-2.12-1.17-2.35-2.35l-3.18-15.91
		c-0.2-0.98,0.11-2,0.82-2.71l19.09-19.09c6.43-6.43,16.9-6.43,23.33,0c6.43,6.43,6.43,16.9,0,23.33L39.33,56.01
		C38.76,56.58,37.99,56.89,37.21,56.89z M23.84,48.16l12.38,2.47l17.96-17.96c4.09-4.09,4.09-10.76,0-14.85
		c-4.09-4.09-10.75-4.09-14.85,0L21.37,35.78L23.84,48.16z"/>
	<rect x="12.05" y="31.2" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -12.1158 37.1581)" width="53.5" height="4"/>
	<polygon points="48.32,46.69 28.49,42.73 32.1,39.37 49.1,42.77 	"/>
	<path d="M11.4,64.14L7.86,60.6c-0.2-0.2-0.2-0.51,0-0.71l13.44-13.44l4.24,4.24L12.1,64.14C11.91,64.34,11.59,64.34,11.4,64.14z"/>
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
