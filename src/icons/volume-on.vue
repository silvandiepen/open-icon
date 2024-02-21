<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M35.59,66.83L16.76,48H6.5C6.22,48,6,47.78,6,47.5v-23C6,24.22,6.22,24,6.5,24h10.26L35.59,5.17C36.85,3.91,39,4.8,39,6.59
	v58.83C39,67.2,36.85,68.09,35.59,66.83z M12,42h7.24L33,55.76V16.24L19.24,30H12V42z"/>
<path d="M44.71,44.15H43.5c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h1.32c2.17,0,4.1-1.58,4.31-3.73
	c0.24-2.47-1.7-4.56-4.13-4.56h-1.5c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5H45c4.68,0,8.45,3.96,8.13,8.71
	C52.84,40.88,49.05,44.15,44.71,44.15z"/>
<path d="M44.51,56H43.5c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5h1.04c8.61,0,16.02-6.6,16.44-15.19
	C61.43,27.62,54.09,20,45,20h-1.5c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5H45c11.28,0,20.42,9.39,19.99,20.77
	C64.58,47.59,55.34,56,44.51,56z"/>

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
