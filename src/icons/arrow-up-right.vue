<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M48.73,46.64c1.66,0,3-1.34,3-3V23.27c0-0.2-0.02-0.39-0.06-0.59c-0.02-0.09-0.05-0.17-0.08-0.26
		c-0.03-0.1-0.05-0.21-0.09-0.3c-0.04-0.1-0.1-0.19-0.15-0.29c-0.04-0.07-0.07-0.15-0.12-0.22c-0.22-0.33-0.5-0.61-0.83-0.83
		c-0.07-0.05-0.15-0.08-0.23-0.12c-0.09-0.05-0.19-0.11-0.29-0.15c-0.1-0.04-0.2-0.07-0.31-0.1c-0.08-0.02-0.17-0.06-0.25-0.08
		c-0.19-0.04-0.39-0.06-0.59-0.06H28.36c-1.66,0-3,1.34-3,3s1.34,3,3,3h13.12L21.15,46.61c-1.17,1.17-1.17,3.07,0,4.24
		c0.59,0.59,1.35,0.88,2.12,0.88s1.54-0.29,2.12-0.88l20.33-20.33v13.12C45.73,45.29,47.07,46.64,48.73,46.64z"/>
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
