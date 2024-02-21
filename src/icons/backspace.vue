<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M25.61,56.85C25.7,56.95,25.83,57,25.96,57H65.5c0.28,0,0.5-0.22,0.5-0.5v-41c0-0.28-0.22-0.5-0.5-0.5H25.96
		c-0.13,0-0.26,0.05-0.35,0.15l-20.5,20.5c-0.2,0.2-0.2,0.51,0,0.71L25.61,56.85z M28.24,21H60v30H28.24l-15-15L28.24,21z"/>
	<path d="M34.94,43.94l2.12,2.12c0.2,0.2,0.51,0.2,0.71,0L45,38.83l7.23,7.23c0.2,0.2,0.51,0.2,0.71,0l2.12-2.12
		c0.2-0.2,0.2-0.51,0-0.71L47.83,36l7.23-7.23c0.2-0.2,0.2-0.51,0-0.71l-2.12-2.12c-0.2-0.2-0.51-0.2-0.71,0L45,33.17l-7.23-7.23
		c-0.2-0.2-0.51-0.2-0.71,0l-2.12,2.12c-0.2,0.2-0.2,0.51,0,0.71L42.17,36l-7.23,7.23C34.74,43.43,34.74,43.74,34.94,43.94z"/>
</g>

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
