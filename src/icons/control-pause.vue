<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M29.5,57c2.76,0,5-2.24,5-5V20c0-2.76-2.24-5-5-5H20c-2.76,0-5,2.24-5,5v32c0,2.76,2.24,5,5,5H29.5z M21,21h7.5v30H21V21z"
		/>
	<path d="M52,15h-9.5c-2.76,0-5,2.24-5,5v32c0,2.76,2.24,5,5,5H52c2.76,0,5-2.24,5-5V20C57,17.24,54.76,15,52,15z M51,51h-7.5V21H51
		V51z"/>
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
