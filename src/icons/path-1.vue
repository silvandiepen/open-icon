<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M36,62.5c-4.82,0-8.75-3.93-8.75-8.75S31.18,45,36,45s8.75,3.93,8.75,8.75S40.82,62.5,36,62.5z M36,49
	c-2.62,0-4.75,2.13-4.75,4.75S33.38,58.5,36,58.5s4.75-2.13,4.75-4.75S38.62,49,36,49z"/>
<path d="M36,24.5c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5s6.5,2.92,6.5,6.5S39.58,24.5,36,24.5z M36,15.5
	c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5S37.38,15.5,36,15.5z"/>
<path d="M54,38c-3.58,0-6.5-2.92-6.5-6.5S50.42,25,54,25s6.5,2.92,6.5,6.5S57.58,38,54,38z M54,29c-1.38,0-2.5,1.12-2.5,2.5
	S52.62,34,54,34s2.5-1.12,2.5-2.5S55.38,29,54,29z"/>
<rect x="33" y="22.5" width="6" height="24.5"/>
<path d="M18,38c-3.58,0-6.5-2.92-6.5-6.5S14.42,25,18,25s6.5,2.92,6.5,6.5S21.58,38,18,38z M18,29c-1.38,0-2.5,1.12-2.5,2.5
	S16.62,34,18,34s2.5-1.12,2.5-2.5S19.38,29,18,29z"/>
<path d="M29.25,57H27c-6.62,0-12-5.38-12-12v-9h6v9c0,3.31,2.69,6,6,6h2.25V57z"/>
<path d="M45,57h-2.25v-6H45c3.31,0,6-2.69,6-6v-9h6v9C57,51.62,51.62,57,45,57z"/>

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
