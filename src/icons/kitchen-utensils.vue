<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M16.5,61.5h-6v-51h3c0.43,0,4.31,0.11,7.75,4.08c4.91,5.66,6.33,16.04,4.22,30.84L25.1,48h-8.6V61.5z M16.5,42h3.37
	c1.78-15.15-1.16-21.2-3.14-23.49c-0.07-0.08-0.15-0.17-0.22-0.24V42z"/>
<path d="M36,61.5c-5.47,0-9.75-5.27-9.75-12s4.28-12,9.75-12s9.75,5.27,9.75,12S41.47,61.5,36,61.5z M36,43.5
	c-1.77,0-3.75,2.46-3.75,6s1.98,6,3.75,6s3.75-2.46,3.75-6S37.77,43.5,36,43.5z"/>
<path d="M54,43.5c-8.01,0-13.12-12.44-13.12-21c0-7.96,4.42-12,13.12-12s13.12,4.04,13.12,12C67.12,31.06,62.01,43.5,54,43.5z
	 M54,16.5c-4.73,0-7.12,0.93-7.12,6c0,7.1,4.25,15,7.12,15s7.12-7.9,7.12-15C61.12,17.43,58.73,16.5,54,16.5z"/>
<rect x="33" y="10.5" width="6" height="33"/>
<rect x="51" y="15" width="6" height="46.5"/>

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
