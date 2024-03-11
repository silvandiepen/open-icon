<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M12.03,54h5c1.1,0,2-0.9,2-2V20c0-1.1-0.9-2-2-2h-5c-1.1,0-2,0.9-2,2v32C10.03,53.1,10.93,54,12.03,54z"/>
	<path d="M20.94,37.92l15.25,12.73c1.3,1.09,3.29,0.16,3.28-1.54L39.4,22.88c0-1.72-2.04-2.63-3.33-1.49L20.89,34.89
		C19.98,35.71,20,37.14,20.94,37.92z"/>
	<path d="M58.63,21.05L41.48,34.84c-1.02,0.82-0.99,2.37,0.05,3.16l17.23,13c1.32,1,3.21,0.05,3.2-1.6L61.89,22.6
		C61.88,20.93,59.94,20,58.63,21.05z"/>
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
