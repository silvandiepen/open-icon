<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M58.5,61.5h-45c-1.66,0-3-1.34-3-3v-45c0-1.66,1.34-3,3-3h45c1.66,0,3,1.34,3,3v45C61.5,60.16,60.16,61.5,58.5,61.5z
	 M16.5,55.5h39v-39h-39V55.5z"/>
<path d="M28.5,36.5c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S32.91,36.5,28.5,36.5z M28.5,24.5c-2.21,0-4,1.79-4,4s1.79,4,4,4
	s4-1.79,4-4S30.71,24.5,28.5,24.5z"/>
<path d="M45,33.5c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5s6.5,2.92,6.5,6.5S48.58,33.5,45,33.5z M45,24.5
	c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5S46.38,24.5,45,24.5z"/>
<path d="M43.5,51.5c-4.41,0-8-3.59-8-8s3.59-8,8-8s8,3.59,8,8S47.91,51.5,43.5,51.5z M43.5,39.5c-2.21,0-4,1.79-4,4s1.79,4,4,4
	s4-1.79,4-4S45.71,39.5,43.5,39.5z"/>
<path d="M27,51.5c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5s6.5,2.92,6.5,6.5S30.58,51.5,27,51.5z M27,42.5
	c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5S28.38,42.5,27,42.5z"/>

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
