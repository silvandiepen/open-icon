<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M46.5,33.5h-21c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h21c0.28,0,0.5,0.22,0.5,0.5v3
	C47,33.28,46.78,33.5,46.5,33.5z"/>
<path d="M46.5,42.5h-21c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h21c0.28,0,0.5,0.22,0.5,0.5v3
	C47,42.28,46.78,42.5,46.5,42.5z"/>
<path d="M46.5,51.5h-21c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h21c0.28,0,0.5,0.22,0.5,0.5v3
	C47,51.28,46.78,51.5,46.5,51.5z"/>
<g>
	<path d="M54.5,66h-37c-3.86,0-7-3.14-7-7V17.5c0-3.86,3.14-7,7-7h37c3.86,0,7,3.14,7,7V59C61.5,62.86,58.36,66,54.5,66z M17.5,16.5
		c-0.55,0-1,0.45-1,1V59c0,0.55,0.45,1,1,1h37c0.55,0,1-0.45,1-1V17.5c0-0.55-0.45-1-1-1H17.5z"/>
</g>
<rect x="20.5" y="7" width="4" height="13"/>
<rect x="29.5" y="7" width="4" height="13"/>
<rect x="38.5" y="7" width="4" height="13"/>
<rect x="47.5" y="7" width="4" height="13"/>

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
