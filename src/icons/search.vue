<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M32.27,53.27c-11.58,0-21-9.42-21-21s9.42-21,21-21s21,9.42,21,21S43.85,53.27,32.27,53.27z M32.27,17.27
	c-8.27,0-15,6.73-15,15s6.73,15,15,15s15-6.73,15-15S40.54,17.27,32.27,17.27z"/>
<path d="M56.03,60.27L42.88,47.12l4.24-4.24l13.15,13.15c0.2,0.2,0.2,0.51,0,0.71l-3.54,3.54C56.54,60.46,56.22,60.46,56.03,60.27z"
	/>

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
