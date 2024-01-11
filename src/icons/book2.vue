<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M62,10.5H46.86c-3.9,0-7.73,1.28-10.86,3.56c-3.13-2.29-6.96-3.56-10.86-3.56H10c-2.21,0-4,1.79-4,4V53c0,2.21,1.79,4,4,4
	h15.14c3.25,0,6.44,1.32,8.74,3.62L36,62.74l2.12-2.12c2.3-2.3,5.49-3.62,8.74-3.62H62c2.21,0,4-1.79,4-4V14.5
	C66,12.29,64.21,10.5,62,10.5z M25.14,51H12V16.5h13.14c3.25,0,6.44,1.32,8.74,3.62L34,20.24v33.06C31.3,51.82,28.24,51,25.14,51z
	 M60,51H46.86c-3.1,0-6.16,0.82-8.86,2.31V20.24l0.12-0.12c2.3-2.3,5.49-3.62,8.74-3.62H60V51z"/>

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
