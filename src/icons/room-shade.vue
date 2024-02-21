<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M15,42.82c0,3.86,3.14,7,7,7h12v4.38c-2.1,0.81-3.59,2.84-3.59,5.22c0,3.08,2.51,5.59,5.59,5.59s5.59-2.51,5.59-5.59
		c0-2.38-1.49-4.41-3.59-5.22v-4.38h12c3.86,0,7-3.14,7-7V16.5h4.5v-6H57H15h-4.5v6H15V42.82z M36,61c-0.88,0-1.59-0.71-1.59-1.59
		s0.71-1.59,1.59-1.59s1.59,0.71,1.59,1.59S36.88,61,36,61z M51,42.82c0,0.55-0.45,1-1,1H22c-0.55,0-1-0.45-1-1V16.5h30V42.82z"/>
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
