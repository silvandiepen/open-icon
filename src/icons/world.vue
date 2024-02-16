<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,6C19.46,6,6,19.46,6,36s13.46,30,30,30s30-13.46,30-30S52.54,6,36,6z M24.96,14.7c-2.35,4-4.19,10.07-4.43,19.3h-8.44
		C12.79,25.6,17.83,18.41,24.96,14.7z M12.09,38h8.44c0.24,9.23,2.08,15.3,4.43,19.3C17.83,53.59,12.79,46.4,12.09,38z M34,59.91
		c-0.5-0.04-0.99-0.09-1.48-0.17c-3.25-2.05-7.62-7.46-7.99-21.74H34V59.91z M34,34h-9.47c0.37-14.28,4.74-19.69,7.97-21.74
		c0.49-0.07,0.99-0.13,1.5-0.17V34z M38,12.09c0.5,0.04,0.99,0.09,1.48,0.17c3.25,2.05,7.62,7.46,7.99,21.74H38V12.09z M39.5,59.74
		C39,59.81,38.5,59.87,38,59.91V38h9.47C47.1,52.28,42.73,57.69,39.5,59.74z M47.04,57.3c2.35-4,4.19-10.07,4.43-19.3h8.44
		C59.21,46.4,54.17,53.59,47.04,57.3z M51.47,34c-0.24-9.23-2.08-15.3-4.43-19.3c7.13,3.71,12.17,10.9,12.87,19.3H51.47z"/>
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
