<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M11,61.5h5c0.28,0,0.5-0.22,0.5-0.5v-8.5H25c0.28,0,0.5-0.22,0.5-0.5v-8.5H34c0.28,0,0.5-0.22,0.5-0.5v-8.5H43
		c0.28,0,0.5-0.22,0.5-0.5v-8.5H52c0.28,0,0.5-0.22,0.5-0.5v-8.5H61c0.28,0,0.5-0.22,0.5-0.5v-5c0-0.28-0.22-0.5-0.5-0.5H47
		c-0.28,0-0.5,0.22-0.5,0.5v8.5H38c-0.28,0-0.5,0.22-0.5,0.5v8.5H29c-0.28,0-0.5,0.22-0.5,0.5v8.5H20c-0.28,0-0.5,0.22-0.5,0.5v8.5
		H11c-0.28,0-0.5,0.22-0.5,0.5v14C10.5,61.28,10.72,61.5,11,61.5z"/>
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
