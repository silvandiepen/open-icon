<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M4.5,6v6H6v25.5H4.5v6H6v12H4.5v6H6h9v6h6v-6h12v6h6v-6h12v6h6v-6h9h1.5v-6H66v-12h1.5v-6H66V12h1.5V6H66H6H4.5z M12,20
			h13v17.5H12V20z M43,20v17.5H29V20H43z M29,16v-4h14v4H29z M60,55.5H12v-12h48V55.5z M47,37.5V20h13v17.5H47z M60,16H47v-4h13V16z
			 M25,12v4H12v-4H25z"/>
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
