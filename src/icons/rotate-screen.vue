<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M29.28,65.35L6.65,42.72c-0.2-0.2-0.2-0.51,0-0.71L42.01,6.65c0.2-0.2,0.51-0.2,0.71,0l22.63,22.63c0.2,0.2,0.2,0.51,0,0.71
	L29.99,65.35C29.79,65.54,29.48,65.54,29.28,65.35z M14.79,42.36l14.85,14.85l27.58-27.58L42.36,14.79L14.79,42.36z"/>
<path d="M11,27H7v-9c0-6.08,4.92-11,11-11h1.5C19.78,7,20,7.22,20,7.5v3c0,0.28-0.22,0.5-0.5,0.5H18c-3.87,0-7,3.13-7,7V27z"/>
<path d="M54,65h-1.5c-0.28,0-0.5-0.22-0.5-0.5v-3c0-0.28,0.22-0.5,0.5-0.5H54c3.87,0,7-3.13,7-7V44h4v10C65,60.08,60.08,65,54,65z"
	/>
<path d="M68,51.98l-5-5l-5,5c-0.2,0.2-0.51,0.2-0.71,0l-2.12-2.12c-0.2-0.2-0.2-0.51,0-0.71l6.41-6.41c0.78-0.78,2.05-0.78,2.83,0
	l6.41,6.41c0.2,0.2,0.2,0.51,0,0.71l-2.12,2.12C68.51,52.17,68.19,52.17,68,51.98z"/>
<path d="M7.59,28.41L1.17,22c-0.2-0.2-0.2-0.51,0-0.71l2.12-2.12c0.2-0.2,0.51-0.2,0.71,0l5,5l5-5c0.2-0.2,0.51-0.2,0.71,0
	l2.12,2.12c0.2,0.2,0.2,0.51,0,0.71l-6.41,6.41C9.63,29.2,8.37,29.2,7.59,28.41z"/>

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
