<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M57,36c0-10.56-7.84-19.3-18-20.76V9c0-1.66-1.34-3-3-3s-3,1.34-3,3v6.24C22.84,16.7,15,25.44,15,36v18c0,1.66,1.34,3,3,3
		h6.39c1.34,5.17,6.03,9,11.61,9s10.27-3.83,11.61-9H54c1.66,0,3-1.34,3-3V36z M36,60c-2.22,0-4.15-1.21-5.19-3h10.38
		C40.15,58.79,38.22,60,36,60z M51,51H21V36c0-8.27,6.73-15,15-15s15,6.73,15,15V51z"/>
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
