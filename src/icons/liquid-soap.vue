<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M39,27.58h-6v-2.83c0-2.07-1.68-3.75-3.75-3.75s-3.75,1.68-3.75,3.75v2.83h-6v-2.83c0-5.38,4.37-9.75,9.75-9.75
	S39,19.37,39,24.75V27.58z"/>
<rect x="26.25" y="9" width="6" height="9"/>
<rect x="20.25" y="6" width="24.75" height="6"/>
<path d="M43,66.58H15.5c-2.76,0-5-2.24-5-5v-26c0-6.07,4.93-11,11-11H37c6.07,0,11,4.93,11,11v26C48,64.34,45.76,66.58,43,66.58z
	 M16.5,60.58H42v-25c0-2.76-2.24-5-5-5H21.5c-2.76,0-5,2.24-5,5V60.58z"/>
<path d="M13.5,52.08v-4c6.08,0,9.19-1.79,12.79-3.86c4.19-2.41,8.94-5.14,18.71-5.14v4c-8.7,0-12.78,2.34-16.72,4.61
	C24.53,49.85,20.64,52.08,13.5,52.08z"/>
<path d="M56.25,29c-4.83,0-8.75-3.93-8.75-8.75s3.92-8.75,8.75-8.75S65,15.43,65,20.25S61.08,29,56.25,29z M56.25,15.5
	c-2.62,0-4.75,2.13-4.75,4.75S53.63,25,56.25,25S61,22.87,61,20.25S58.87,15.5,56.25,15.5z"/>
<path d="M58.5,47c-3.58,0-6.5-2.92-6.5-6.5s2.92-6.5,6.5-6.5s6.5,2.92,6.5,6.5S62.08,47,58.5,47z M58.5,38c-1.38,0-2.5,1.12-2.5,2.5
	s1.12,2.5,2.5,2.5s2.5-1.12,2.5-2.5S59.88,38,58.5,38z"/>

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
