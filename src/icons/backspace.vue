<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M65.5,57H25.96c-0.13,0-0.26-0.05-0.35-0.15l-20.5-20.5c-0.2-0.2-0.2-0.51,0-0.71l20.5-20.5C25.7,15.05,25.83,15,25.96,15
	H65.5c0.28,0,0.5,0.22,0.5,0.5v41C66,56.78,65.78,57,65.5,57z M28.24,51H60V21H28.24l-15,15L28.24,51z"/>
<path d="M52.23,46.06L34.94,28.77c-0.2-0.2-0.2-0.51,0-0.71l2.12-2.12c0.2-0.2,0.51-0.2,0.71,0l17.29,17.29c0.2,0.2,0.2,0.51,0,0.71
	l-2.12,2.12C52.74,46.26,52.43,46.26,52.23,46.06z"/>
<path d="M37.06,46.06l-2.12-2.12c-0.2-0.2-0.2-0.51,0-0.71l17.29-17.29c0.2-0.2,0.51-0.2,0.71,0l2.12,2.12c0.2,0.2,0.2,0.51,0,0.71
	L37.77,46.06C37.57,46.26,37.26,46.26,37.06,46.06z"/>

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
