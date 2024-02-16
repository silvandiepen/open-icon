<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M17.5,6c-3.86,0-7,3.14-7,7v46c0,3.86,3.14,7,7,7h37c3.86,0,7-3.14,7-7V25.76L41.74,6H17.5z M55.5,59c0,0.55-0.45,1-1,1
		h-37c-0.55,0-1-0.45-1-1V13c0-0.55,0.45-1,1-1h21v11c0,3.31,2.69,6,6,6h11V59z M42.5,15.24L52.26,25H44.5c-1.1,0-2-0.9-2-2V15.24z"
		/>
	<path d="M42.53,34.23L36,40.76l-6.53-6.53c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71L31.76,45l-6.53,6.53
		c-0.2,0.2-0.2,0.51,0,0.71l3.54,3.54c0.2,0.2,0.51,0.2,0.71,0L36,49.24l6.53,6.53c0.2,0.2,0.51,0.2,0.71,0l3.54-3.54
		c0.2-0.2,0.2-0.51,0-0.71L40.24,45l6.53-6.53c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54C43.04,34.04,42.72,34.04,42.53,34.23z"/>
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
