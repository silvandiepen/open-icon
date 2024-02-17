<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M64.27,28.78c-0.54-0.25-1.14-0.33-1.71-0.25L56,23.06V18c0-1.1-0.9-2-2-2h-6.48L37.28,7.46c-0.74-0.62-1.82-0.62-2.56,0
		L24.48,16H18c-1.1,0-2,0.9-2,2v5.06l-6.57,5.47c-0.57-0.08-1.16-0.01-1.71,0.25C6.67,29.28,6,30.34,6,31.5V59c0,3.86,3.14,7,7,7h46
		c3.86,0,7-3.14,7-7V31.5C66,30.34,65.33,29.28,64.27,28.78z M59.09,30.85L56,33.43v-5.16L59.09,30.85z M36,11.6l5.28,4.4H30.72
		L36,11.6z M52,20v16.76L36,50.09L20,36.76V20H52z M16,33.43l-3.09-2.58L16,28.27V33.43z M60,59c0,0.55-0.45,1-1,1H13
		c-0.55,0-1-0.45-1-1V37.91l22.08,18.4c1.11,0.93,2.73,0.93,3.84,0L60,37.91V59z"/>
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
