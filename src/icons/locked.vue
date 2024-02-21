<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M49.5,38c-1.1,0-2-0.9-2-2V22.5C47.5,16.16,42.34,11,36,11s-11.5,5.16-11.5,11.5V36c0,1.1-0.9,2-2,2s-2-0.9-2-2V22.5
	C20.5,13.95,27.45,7,36,7s15.5,6.95,15.5,15.5V36C51.5,37.1,50.6,38,49.5,38z"/>
<path d="M50.5,66h-29c-6.08,0-11-4.92-11-11V33.5c0-0.28,0.22-0.5,0.5-0.5h50c0.28,0,0.5,0.22,0.5,0.5V55
	C61.5,61.08,56.58,66,50.5,66z M16.5,39v16c0,2.76,2.24,5,5,5h29c2.76,0,5-2.24,5-5V39H16.5z"/>
<path d="M38.5,57h-5c-0.28,0-0.5-0.22-0.5-0.5v-14c0-0.28,0.22-0.5,0.5-0.5h5c0.28,0,0.5,0.22,0.5,0.5v14C39,56.78,38.78,57,38.5,57
	z"/>

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
