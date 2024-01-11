<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M59.91,34h-8.44c-0.24-9.23-2.08-15.3-4.43-19.3
	C54.17,18.41,59.21,25.6,59.91,34z M39.5,59.74C39,59.82,38.5,59.87,38,59.91V38h9.47C47.1,52.28,42.73,57.69,39.5,59.74z M24.53,38
	H34v21.91c-0.5-0.04-0.99-0.09-1.48-0.17C29.27,57.69,24.9,52.28,24.53,38z M32.5,12.26c0.49-0.07,0.99-0.13,1.5-0.17V34h-9.47
	C24.9,19.72,29.27,14.31,32.5,12.26z M38,34V12.09c0.5,0.04,0.99,0.09,1.48,0.17c3.25,2.05,7.62,7.46,7.99,21.74H38z M24.96,14.7
	c-2.35,4-4.19,10.07-4.43,19.3h-8.44C12.79,25.6,17.83,18.41,24.96,14.7z M12.09,38h8.44c0.24,9.23,2.08,15.3,4.43,19.3
	C17.83,53.59,12.79,46.4,12.09,38z M47.04,57.3c2.35-4,4.19-10.07,4.43-19.3h8.44C59.21,46.4,54.17,53.59,47.04,57.3z"/>

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
