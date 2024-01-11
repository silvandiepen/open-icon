<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M51.73,23.27c0-0.2-0.02-0.39-0.06-0.59c-0.02-0.09-0.05-0.17-0.08-0.26c-0.03-0.1-0.05-0.2-0.09-0.3
	c-0.04-0.1-0.1-0.2-0.16-0.3c-0.04-0.07-0.07-0.15-0.12-0.22c-0.22-0.33-0.5-0.61-0.83-0.83c-0.07-0.05-0.14-0.08-0.21-0.12
	c-0.1-0.06-0.2-0.12-0.3-0.16c-0.09-0.04-0.19-0.06-0.29-0.09c-0.09-0.03-0.18-0.06-0.27-0.08c-0.19-0.04-0.37-0.06-0.56-0.06
	c-0.01,0-0.02,0-0.02,0H28.36c-1.66,0-3,1.34-3,3s1.34,3,3,3h13.13L21.15,46.61c-1.17,1.17-1.17,3.07,0,4.24
	c0.59,0.59,1.35,0.88,2.12,0.88c0.77,0,1.54-0.29,2.12-0.88l20.34-20.34v13.13c0,1.66,1.34,3,3,3s3-1.34,3-3L51.73,23.27
	C51.73,23.27,51.73,23.27,51.73,23.27z"/>

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
