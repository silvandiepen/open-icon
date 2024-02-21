<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,62.74l-2.12-2.12C31.54,58.29,28.44,57,25.14,57H10c-2.21,0-4-1.79-4-4V14.5c0-2.21,1.79-4,4-4h15.14
	c3.96,0,7.73,1.25,10.86,3.55c3.13-2.31,6.9-3.55,10.86-3.55H62c2.21,0,4,1.79,4,4V53c0,2.21-1.79,4-4,4H46.86
	c-3.3,0-6.41,1.29-8.74,3.62L36,62.74z M12,51h13.14c3.96,0,7.73,1.25,10.86,3.55C39.13,52.25,42.9,51,46.86,51H60V16.5H46.86
	c-3.3,0-6.41,1.29-8.74,3.62L36,22.24l-2.12-2.12c-2.33-2.33-5.44-3.62-8.74-3.62H12V51z"/>
<g>
	<line x1="36" y1="18" x2="36" y2="58.5"/>
	<rect x="34" y="18" width="4" height="40.5"/>
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
