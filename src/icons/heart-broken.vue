<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M65.95,24.87c-0.46-6.43-4.11-11.61-9.55-13.54c-3.09-1.1-10.95-2.51-20.4,6.22c-9.45-8.73-17.32-7.31-20.4-6.22
		c-5.43,1.93-9.09,7.12-9.55,13.54c-0.34,4.83,0.71,21.71,28.56,36.29L36,61.89l1.39-0.73C65.24,46.58,66.29,29.69,65.95,24.87z
		 M12.04,25.29c0.29-4.07,2.37-7.18,5.57-8.31c0.92-0.32,1.89-0.48,2.9-0.48c4.09,0,8.86,2.58,13.3,7.33l1.12,1.19l3.15,9.96
		l-8.91,4.45l3.43,13.71C16.78,43.51,11.51,32.65,12.04,25.29z M37.06,54.5l-3.23-12.93l9.09-4.55l-4.31-13.63
		c5.43-5.6,11.3-8.01,15.79-6.41c3.2,1.14,5.28,4.24,5.57,8.31C60.51,33,54.7,44.55,37.06,54.5z"/>
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
