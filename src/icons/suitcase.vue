<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M59,19.5H48v-6c0-1.66-1.34-3-3-3H27c-1.66,0-3,1.34-3,3v6H13c-3.86,0-7,3.14-7,7v28c0,3.86,3.14,7,7,7h46
			c3.86,0,7-3.14,7-7v-28C66,22.64,62.86,19.5,59,19.5z M29,25.5h14v30H29V25.5z M30,16.5h12v3H30V16.5z M12,54.5v-28
			c0-0.55,0.45-1,1-1h12v30H13C12.45,55.5,12,55.05,12,54.5z M60,54.5c0,0.55-0.45,1-1,1H47v-30h12c0.55,0,1,0.45,1,1V54.5z"/>
	</g>
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
