<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M48,57H6.5C6.22,57,6,56.78,6,56.5V24c0-4.97,4.03-9,9-9h24c4.97,0,9,4.03,9,9V57z M12,51h30V24c0-1.65-1.35-3-3-3H15
	c-1.65,0-3,1.35-3,3V51z"/>
<path d="M65.5,57H42V24h15c4.97,0,9,4.03,9,9v23.5C66,56.78,65.78,57,65.5,57z M48,51h12V33c0-1.65-1.35-3-3-3h-9V51z"/>
<path d="M65,56H43V43h22V56z M47,52h14v-5H47V52z"/>
<path d="M22.5,66c-4.14,0-7.5-3.36-7.5-7.5s3.36-7.5,7.5-7.5s7.5,3.36,7.5,7.5S26.64,66,22.5,66z M22.5,57c-0.83,0-1.5,0.67-1.5,1.5
	s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S23.33,57,22.5,57z"/>
<path d="M49.5,66c-4.14,0-7.5-3.36-7.5-7.5s3.36-7.5,7.5-7.5s7.5,3.36,7.5,7.5S53.64,66,49.5,66z M49.5,57c-0.83,0-1.5,0.67-1.5,1.5
	s0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5S50.33,57,49.5,57z"/>

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
