<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M10,57h15.14c3.3,0,6.41,1.29,8.74,3.62L36,62.74l2.12-2.12c2.33-2.33,5.44-3.62,8.74-3.62H62c2.21,0,4-1.79,4-4V14.5
		c0-2.21-1.79-4-4-4H46.86c-3.96,0-7.73,1.25-10.86,3.55c-3.13-2.31-6.9-3.55-10.86-3.55H10c-2.21,0-4,1.79-4,4V53
		C6,55.21,7.79,57,10,57z M46.86,16.5H60V51H46.86c-3.15,0-6.18,0.8-8.86,2.29V20.24l0.12-0.12C40.46,17.79,43.56,16.5,46.86,16.5z
		 M12,16.5h13.14c3.3,0,6.41,1.29,8.74,3.62L34,20.24v33.04C31.32,51.8,28.29,51,25.14,51H12V16.5z"/>
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
