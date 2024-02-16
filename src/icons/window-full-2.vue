<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	
		<polyline points="
		22.5,13.5 13.5,13.5 13.5,22.5 	"/>
</g>
<g>
	
		<polyline points="
		49.5,58.5 58.5,58.5 58.5,49.5 	"/>
</g>
<g>
	
		<polyline points="
		13.5,49.5 13.5,58.5 22.5,58.5 	"/>
</g>
<g>
	
		<polyline points="
		58.5,22.5 58.5,13.5 49.5,13.5 	"/>
</g>
<line x1="45" y1="27" x2="58.5" y2="13.5"/>
<line x1="13.5" y1="13.5" x2="27" y2="27"/>
<line x1="13.5" y1="58.5" x2="27" y2="45"/>
<line x1="45" y1="45" x2="58.5" y2="58.5"/>

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
