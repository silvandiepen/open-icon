<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M6,38.5C6,38.78,6.22,39,6.5,39h4v18c0,4.96,4.04,9,9,9h33c4.96,0,9-4.04,9-9V39h4c0.28,0,0.5-0.22,0.5-0.5V33
		c0-4.97-4.03-9-9-9h-4.72c1.36-0.93,2.65-1.97,3.86-3.13c0.2-0.2,0.2-0.52,0-0.72l-2.12-2.12c-0.19-0.19-0.5-0.19-0.69,0
		c-2.94,2.83-6.46,4.86-10.29,5.98h-2.14c1.58-2.46,3.11-5.68,3.11-9c0-4.41-3.59-8-8-8s-8,3.59-8,8c0,3.32,1.52,6.54,3.11,9h-2.14
		c-3.83-1.12-7.35-3.15-10.29-5.98c-0.2-0.19-0.5-0.19-0.69,0l-2.12,2.12c-0.2,0.2-0.2,0.53,0,0.72c1.21,1.17,2.5,2.21,3.86,3.13H15
		c-4.97,0-9,4.03-9,9V38.5z M36,11c2.21,0,4,1.79,4,4c0,3.4-2.4,6.96-4,8.96c-1.6-2-4-5.56-4-8.96C32,12.79,33.79,11,36,11z
		 M16.5,57V39H34v21H19.5C17.85,60,16.5,58.65,16.5,57z M55.5,57c0,1.65-1.35,3-3,3H38V39h17.5V57z M60,33H38v-3h19
		C58.65,30,60,31.35,60,33z M15,30h19v3H12C12,31.35,13.35,30,15,30z"/>
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
