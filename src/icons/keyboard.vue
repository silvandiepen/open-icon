<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M6,22v30.57c0,3.86,3.14,7,7,7h46c3.86,0,7-3.14,7-7V22c0-3.86-3.14-7-7-7H13C9.14,15,6,18.14,6,22z M60,22v30.57
		c0,0.55-0.45,1-1,1H13c-0.55,0-1-0.45-1-1V22c0-0.55,0.45-1,1-1h46C59.55,21,60,21.45,60,22z"/>
	<path d="M26.43,23.71H14.71v11.71h11.71V23.71z M22.43,31.43h-3.71v-3.71h3.71V31.43z"/>
	<path d="M26.43,39.14H14.71v11.71h11.71V39.14z M22.43,46.86h-3.71v-3.71h3.71V46.86z"/>
	<path d="M41.86,39.14H30.14v11.71h11.71V39.14z M37.86,46.86h-3.71v-3.71h3.71V46.86z"/>
	<path d="M41.86,23.71H30.14v11.71h11.71V23.71z M37.86,31.43h-3.71v-3.71h3.71V31.43z"/>
	<path d="M57.29,23.71H45.57v11.71h11.71V23.71z M53.29,31.43h-3.71v-3.71h3.71V31.43z"/>
	<path d="M57.29,39.14H45.57v11.71h11.71V39.14z M53.29,46.86h-3.71v-3.71h3.71V46.86z"/>
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
