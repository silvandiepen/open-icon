<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M55,66H17c-6.07,0-11-4.93-11-11V17c0-6.07,4.93-11,11-11h38c6.07,0,11,4.93,11,11v38C66,61.07,61.07,66,55,66z M17,12
	c-2.76,0-5,2.24-5,5v38c0,2.76,2.24,5,5,5h38c2.76,0,5-2.24,5-5V17c0-2.76-2.24-5-5-5H17z"/>
<path d="M55,65c-0.6,0-1.19-0.27-1.58-0.77L30.98,35.38c-1.06-1.36-2.65-2.2-4.36-2.3c-1.71-0.11-3.4,0.53-4.62,1.75L10.41,46.41
	c-0.78,0.78-2.05,0.78-2.83,0c-0.78-0.78-0.78-2.05,0-2.83l11.59-11.59c2.03-2.03,4.84-3.08,7.69-2.91
	c2.86,0.18,5.51,1.58,7.27,3.84l22.44,28.85c0.68,0.87,0.52,2.13-0.35,2.81C55.86,64.86,55.43,65,55,65z"/>
<path d="M49.5,29c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5s6.5,2.92,6.5,6.5S53.08,29,49.5,29z M49.5,20c-1.38,0-2.5,1.12-2.5,2.5
	s1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5S50.88,20,49.5,20z"/>

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
