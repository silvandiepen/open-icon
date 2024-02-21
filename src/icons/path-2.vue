<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M22.5,62.5c-4.82,0-8.75-3.93-8.75-8.75S17.68,45,22.5,45s8.75,3.93,8.75,8.75S27.32,62.5,22.5,62.5z M22.5,49
	c-2.62,0-4.75,2.13-4.75,4.75s2.13,4.75,4.75,4.75s4.75-2.13,4.75-4.75S25.12,49,22.5,49z"/>
<path d="M22.5,24.5c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5S29,14.42,29,18S26.08,24.5,22.5,24.5z M22.5,15.5
	c-1.38,0-2.5,1.12-2.5,2.5s1.12,2.5,2.5,2.5S25,19.38,25,18S23.88,15.5,22.5,15.5z"/>
<path d="M54,38c-3.58,0-6.5-2.92-6.5-6.5S50.42,25,54,25s6.5,2.92,6.5,6.5S57.58,38,54,38z M54,29c-1.38,0-2.5,1.12-2.5,2.5
	S52.62,34,54,34s2.5-1.12,2.5-2.5S55.38,29,54,29z"/>
<rect x="19.5" y="22.5" width="6" height="24.5"/>
<path d="M36,57h-6.75v-6H36c8.27,0,15-6.73,15-15h6C57,47.58,47.58,57,36,57z"/>

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
