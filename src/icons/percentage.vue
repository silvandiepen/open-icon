<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<g>
		<path d="M20.25,30c5.38,0,9.75-4.37,9.75-9.75s-4.37-9.75-9.75-9.75s-9.75,4.37-9.75,9.75S14.87,30,20.25,30z M20.25,16.5
			c2.07,0,3.75,1.68,3.75,3.75S22.32,24,20.25,24s-3.75-1.68-3.75-3.75S18.18,16.5,20.25,16.5z"/>
	</g>
	<g>
		<path d="M51.75,42C46.37,42,42,46.37,42,51.75s4.37,9.75,9.75,9.75s9.75-4.37,9.75-9.75S57.13,42,51.75,42z M51.75,55.5
			c-2.07,0-3.75-1.68-3.75-3.75S49.68,48,51.75,48s3.75,1.68,3.75,3.75S53.82,55.5,51.75,55.5z"/>
	</g>
	<g>
		<path d="M56.03,11.73L11.73,56.03c-0.2,0.2-0.2,0.51,0,0.71l3.54,3.54c0.2,0.2,0.51,0.2,0.71,0l44.29-44.29
			c0.2-0.2,0.2-0.51,0-0.71l-3.54-3.54C56.54,11.54,56.22,11.54,56.03,11.73z"/>
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
