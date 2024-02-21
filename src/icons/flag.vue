<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M56.5,57l-14.37,0c-4.86,0-9.39-2.1-12.87-5.5c-2.32-2.26-5.38-3.5-8.63-3.5H15V15.5c0-0.28,0.22-0.5,0.5-0.5l14.37,0
	c4.86,0,9.39,2.1,12.87,5.5c2.32,2.26,5.38,3.5,8.63,3.5h5.14c0.28,0,0.5,0.22,0.5,0.5v32C57,56.78,56.78,57,56.5,57z M21,42
	c4.77,0.09,9.24,1.99,12.62,5.38c2.33,2.33,5.44,3.62,8.74,3.62H51V30c-4.77-0.09-9.24-1.99-12.62-5.38
	C36.04,22.29,32.94,21,29.64,21H21V42z"/>
<g>
	<path d="M20.5,66h-5c-0.28,0-0.5-0.22-0.5-0.5v-50c0-0.28,0.22-0.5,0.5-0.5H21v50.5C21,65.78,20.78,66,20.5,66z"/>
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
