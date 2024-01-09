<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M19.5,34.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C10.5,30.46,14.54,34.5,19.5,34.5z
		 M16.5,19.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V19.5z"/>
	<path d="M46.5,34.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C37.5,30.46,41.54,34.5,46.5,34.5z
		 M43.5,19.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V19.5z"/>
	<path d="M46.5,61.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C37.5,57.46,41.54,61.5,46.5,61.5z
		 M43.5,46.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V46.5z"/>
	<path d="M19.5,61.5h6c4.96,0,9-4.04,9-9v-6c0-4.96-4.04-9-9-9h-6c-4.96,0-9,4.04-9,9v6C10.5,57.46,14.54,61.5,19.5,61.5z
		 M16.5,46.5c0-1.65,1.35-3,3-3h6c1.65,0,3,1.35,3,3v6c0,1.65-1.35,3-3,3h-6c-1.65,0-3-1.35-3-3V46.5z"/>
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
