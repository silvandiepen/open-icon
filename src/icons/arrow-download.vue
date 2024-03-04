<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M38.5,10.5h-5c-0.28,0-0.5,0.22-0.5,0.5v26.76l-5.65-5.65c-0.2-0.2-0.51-0.2-0.71,0l-3.54,3.54c-0.2,0.2-0.2,0.51,0,0.71
			l10.77,10.77C34.46,47.71,35.23,48,36,48s1.54-0.29,2.12-0.88l10.77-10.77c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54
			c-0.2-0.2-0.51-0.2-0.71,0L39,37.76V11C39,10.72,38.78,10.5,38.5,10.5z"/>
	</g>
	<g>
		<path d="M56.5,55.5h-41c-0.28,0-0.5,0.22-0.5,0.5v5c0,0.28,0.22,0.5,0.5,0.5h41c0.28,0,0.5-0.22,0.5-0.5v-5
			C57,55.72,56.78,55.5,56.5,55.5z"/>
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
