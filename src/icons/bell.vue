<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M38.5,9h-5C33.22,9,33,9.22,33,9.5v5.72c-10.29,1.5-18,10.67-18,21.3V56.5c0,0.28,0.22,0.5,0.5,0.5h8.89
		c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9h8.89c0.28,0,0.5-0.22,0.5-0.5V36c0-10.56-7.84-19.32-18-20.78V9.5
		C39,9.22,38.78,9,38.5,9z M36,60c-2.22,0-4.15-1.21-5.19-3h10.38C40.15,58.79,38.22,60,36,60z M51,36v15H21V36
		c0-8.27,6.73-15,15-15S51,27.73,51,36z"/>
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
