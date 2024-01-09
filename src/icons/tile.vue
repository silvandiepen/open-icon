<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M15,66h42c4.96,0,9-4.04,9-9V15c0-4.96-4.04-9-9-9H15c-4.96,0-9,4.04-9,9v42C6,61.96,10.04,66,15,66z M12,15
		c0-1.65,1.35-3,3-3h42c1.65,0,3,1.35,3,3v35.62C59.27,51.46,58.2,52,57,52H15c-1.2,0-2.27-0.54-3-1.38V15z M57,60H15
		c-1.65,0-3-1.35-3-3v-1.59c0.93,0.38,1.94,0.59,3,0.59h42c1.06,0,2.07-0.21,3-0.59V57C60,58.65,58.65,60,57,60z"/>
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
