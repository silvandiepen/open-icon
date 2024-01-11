<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M61.44,12.91c-0.02-0.09-0.05-0.17-0.08-0.26c-0.03-0.1-0.05-0.2-0.09-0.3c-0.04-0.1-0.1-0.2-0.16-0.3
	c-0.04-0.07-0.07-0.15-0.12-0.22c-0.22-0.33-0.5-0.61-0.83-0.83c-0.07-0.05-0.14-0.08-0.21-0.12c-0.1-0.06-0.2-0.11-0.3-0.16
	c-0.1-0.04-0.2-0.06-0.3-0.09c-0.09-0.03-0.17-0.06-0.26-0.08c-0.19-0.04-0.39-0.06-0.59-0.06H46.54c-1.66,0-3,1.34-3,3s1.34,3,3,3
	h4.72l-7.54,7.54c-2.23-1.44-4.87-2.29-7.72-2.29c-7.86,0-14.25,6.39-14.25,14.25c0,6.83,4.83,12.54,11.25,13.93V58h-3.75
	c-1.66,0-3,1.34-3,3s1.34,3,3,3H33v3.5c0,1.66,1.34,3,3,3c1.66,0,3-1.34,3-3V64h3.75c1.66,0,3-1.34,3-3s-1.34-3-3-3H39v-8.07
	c6.42-1.38,11.25-7.1,11.25-13.93c0-2.84-0.85-5.49-2.29-7.72l7.54-7.54v4.72c0,1.66,1.34,3,3,3s3-1.34,3-3V13.5
	C61.5,13.3,61.48,13.11,61.44,12.91z M36,44.25c-4.55,0-8.25-3.7-8.25-8.25s3.7-8.25,8.25-8.25s8.25,3.7,8.25,8.25
	S40.55,44.25,36,44.25z"/>

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
