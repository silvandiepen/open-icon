<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M56.59,66.83l-7.22-7.22C47.94,59.87,46.47,60,45,60c-11.58,0-21-8.07-21-18s9.42-18,21-18s21,8.07,21,18
	c0,4.74-2.17,9.26-6,12.61v10.81C60,67.2,57.85,68.09,56.59,66.83z M51.24,53L54,55.76v-4.08l1.21-0.9C58.25,48.5,60,45.3,60,42
	c0-6.62-6.73-12-15-12s-15,5.38-15,12s6.73,12,15,12c1.56,0,3.11-0.19,4.58-0.57L51.24,53z"/>
<path d="M13,54v-8.85C9.17,41.96,7,37.58,7,33c0-9.37,8.97-17,20-17c7.93,0,15.11,3.98,18.3,10.14l-3.55,1.84
	C39.24,23.13,33.45,20,27,20c-8.82,0-16,5.83-16,13c0,3.62,1.89,7.11,5.2,9.57l0.8,0.6v6l4.06-4.06l1.11,0.29
	c1.98,0.51,4.11,0.69,6.17,0.55l0.27,3.99c-2.09,0.14-4.25,0.02-6.31-0.4l-5.89,5.89C15.15,56.67,13,55.78,13,54z"/>

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
