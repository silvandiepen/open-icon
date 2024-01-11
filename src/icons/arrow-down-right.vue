<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M48.73,25.36c-1.66,0-3,1.34-3,3v13.13L25.39,21.15c-1.17-1.17-3.07-1.17-4.24,0c-1.17,1.17-1.17,3.07,0,4.24l20.34,20.34
	H28.36c-1.66,0-3,1.34-3,3s1.34,3,3,3h20.37c0.2,0,0.39-0.02,0.59-0.06c0.09-0.02,0.18-0.05,0.27-0.08c0.1-0.03,0.2-0.05,0.29-0.09
	c0.11-0.04,0.21-0.11,0.31-0.16c0.07-0.04,0.14-0.07,0.21-0.11c0.33-0.22,0.61-0.5,0.83-0.83c0.04-0.07,0.07-0.14,0.11-0.21
	c0.06-0.1,0.12-0.2,0.16-0.31c0.04-0.09,0.06-0.19,0.09-0.29c0.03-0.09,0.06-0.18,0.08-0.27c0.04-0.19,0.06-0.39,0.06-0.58
	c0,0,0,0,0-0.01V28.36C51.73,26.7,50.39,25.36,48.73,25.36z"/>

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
