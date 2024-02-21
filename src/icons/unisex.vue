<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M38.5,66h-5c-0.28,0-0.5-0.22-0.5-0.5v-19h6v19C39,65.78,38.78,66,38.5,66z"/>
<path d="M45.25,59.5h-18.5c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5h18.5c0.28,0,0.5,0.22,0.5,0.5v5
	C45.75,59.28,45.53,59.5,45.25,59.5z"/>
<path d="M36,50.25c-7.86,0-14.25-6.39-14.25-14.25S28.14,21.75,36,21.75S50.25,28.14,50.25,36S43.86,50.25,36,50.25z M36,27.75
	c-4.55,0-8.25,3.7-8.25,8.25s3.7,8.25,8.25,8.25s8.25-3.7,8.25-8.25S40.55,27.75,36,27.75z"/>
<g>
	<path d="M61,28.46h-5c-0.28,0-0.5-0.22-0.5-0.5V16.5H44.04c-0.28,0-0.5-0.22-0.5-0.5v-5c0-0.28,0.22-0.5,0.5-0.5H58.5
		c1.66,0,3,1.34,3,3v14.46C61.5,28.23,61.28,28.46,61,28.46z"/>
	<rect x="40.79" y="19.23" transform="matrix(0.7071 -0.7071 0.7071 0.7071 -1.14 41.7044)" width="17.96" height="6"/>
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
