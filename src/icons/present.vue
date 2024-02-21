<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M65.5,39h-59C6.22,39,6,38.78,6,38.5V33c0-4.97,4.03-9,9-9h42c4.97,0,9,4.03,9,9v5.5C66,38.78,65.78,39,65.5,39z M12,33h48
	c0-1.65-1.35-3-3-3H15C13.35,30,12,31.35,12,33z"/>
<path d="M52.5,66h-33c-4.96,0-9-4.04-9-9V33h51v24C61.5,61.96,57.46,66,52.5,66z M16.5,39v18c0,1.65,1.35,3,3,3h33
	c1.65,0,3-1.35,3-3V39H16.5z"/>
<rect x="34" y="27" width="4" height="36"/>
<path d="M36,29c-7.58,0-14.71-2.88-20.14-8.13c-0.2-0.2-0.2-0.52,0-0.72l2.12-2.12c0.19-0.19,0.5-0.19,0.69,0
	C23.35,22.53,29.49,25,36,25s12.65-2.47,17.33-6.98c0.2-0.19,0.5-0.19,0.69,0l2.12,2.12c0.2,0.2,0.2,0.53,0,0.72
	C50.71,26.12,43.58,29,36,29z"/>
<path d="M36,29.83l-1.41-1.41C34.32,28.15,28,21.75,28,15c0-4.41,3.59-8,8-8s8,3.59,8,8c0,6.75-6.32,13.15-6.59,13.41L36,29.83z
	 M36,11c-2.21,0-4,1.79-4,4c0,3.4,2.4,6.96,4,8.96c1.6-2,4-5.56,4-8.96C40,12.79,38.21,11,36,11z"/>

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
