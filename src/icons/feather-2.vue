<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="
		M56.3,15.7c-5.27-5.27-13.82-5.27-19.09,0L18.11,34.8L21.3,50.7l15.91,3.18L56.3,34.8C61.57,29.52,61.57,20.98,56.3,15.7z"/>
	
		<line x1="56.3" y1="15.7" x2="21.3" y2="50.7"/>
	
		<line x1="30.84" y1="41.16" x2="46.75" y2="44.34"/>
	
		<line x1="11.75" y1="60.25" x2="21.3" y2="50.7"/>
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
