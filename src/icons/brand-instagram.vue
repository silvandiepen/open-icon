<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M22,67.5h28c9.65,0,17.5-7.85,17.5-17.5V22c0-9.65-7.85-17.5-17.5-17.5H22C12.35,4.5,4.5,12.35,4.5,22v28
		C4.5,59.65,12.35,67.5,22,67.5z M11.5,22c0-5.79,4.71-10.5,10.5-10.5h28c5.79,0,10.5,4.71,10.5,10.5v28c0,5.79-4.71,10.5-10.5,10.5
		H22c-5.79,0-10.5-4.71-10.5-10.5V22z"/>
	<circle cx="53.5" cy="18.5" r="3.5"/>
	<path d="M36,53.5c9.65,0,17.5-7.85,17.5-17.5c0-9.65-7.85-17.5-17.5-17.5S18.5,26.35,18.5,36C18.5,45.65,26.35,53.5,36,53.5z
		 M36,25.5c5.79,0,10.5,4.71,10.5,10.5S41.79,46.5,36,46.5S25.5,41.79,25.5,36S30.21,25.5,36,25.5z"/>
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
