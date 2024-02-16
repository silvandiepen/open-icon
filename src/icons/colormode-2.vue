<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<line x1="36" y1="9" x2="36" y2="63"/>
<path d="M36,49.5c-7.46,0-13.5-6.04-13.5-13.5
	S28.54,22.5,36,22.5"/>
<line x1="9" y1="36" x2="13.5" y2="36"/>
<line x1="16.91" y1="16.91" x2="20.09" y2="20.09"/>
<line x1="16.91" y1="55.09" x2="20.09" y2="51.91"/>
<path d="M36,48.42c2.85,2.43,6.53,3.9,10.56,3.9
	c2.52,0,4.9-0.57,7.03-1.59c0.5-0.24,0.55-0.94,0.09-1.25c-4.3-2.94-7.12-7.88-7.12-13.47c0-5.6,2.82-10.54,7.12-13.47
	c0.46-0.31,0.41-1.01-0.09-1.25c-2.73-1.31-5.88-1.88-9.2-1.45c-3.17,0.41-6.06,1.76-8.39,3.75"/>

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
