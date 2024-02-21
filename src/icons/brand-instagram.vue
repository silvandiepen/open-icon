<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M36,18.5c-9.65,0-17.5,7.85-17.5,17.5c0,9.65,7.85,17.5,17.5,17.5S53.5,45.65,53.5,36C53.5,26.35,45.65,18.5,36,18.5z
		 M36,46.5c-5.79,0-10.5-4.71-10.5-10.5S30.21,25.5,36,25.5S46.5,30.21,46.5,36S41.79,46.5,36,46.5z"/>
	<circle cx="53.5" cy="18.5" r="3.5"/>
	<path d="M50,4.5H22C12.35,4.5,4.5,12.35,4.5,22v28c0,9.65,7.85,17.5,17.5,17.5h28c9.65,0,17.5-7.85,17.5-17.5V22
		C67.5,12.35,59.65,4.5,50,4.5z M60.5,50c0,5.79-4.71,10.5-10.5,10.5H22c-5.79,0-10.5-4.71-10.5-10.5V22c0-5.79,4.71-10.5,10.5-10.5
		h28c5.79,0,10.5,4.71,10.5,10.5V50z"/>
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
