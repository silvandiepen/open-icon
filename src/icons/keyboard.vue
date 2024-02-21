<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M59,59.57H13c-3.86,0-7-3.14-7-7V22c0-3.86,3.14-7,7-7h46c3.86,0,7,3.14,7,7v30.57C66,56.43,62.86,59.57,59,59.57z M13,21
	c-0.55,0-1,0.45-1,1v30.57c0,0.55,0.45,1,1,1h46c0.55,0,1-0.45,1-1V22c0-0.55-0.45-1-1-1H13z"/>
<path d="M26.43,35.43H14.71V23.71h11.71V35.43z M18.71,31.43h3.71v-3.71h-3.71V31.43z"/>
<path d="M26.43,50.86H14.71V39.14h11.71V50.86z M18.71,46.86h3.71v-3.71h-3.71V46.86z"/>
<path d="M41.86,50.86H30.14V39.14h11.71V50.86z M34.14,46.86h3.71v-3.71h-3.71V46.86z"/>
<path d="M41.86,35.43H30.14V23.71h11.71V35.43z M34.14,31.43h3.71v-3.71h-3.71V31.43z"/>
<path d="M57.29,35.43H45.57V23.71h11.71V35.43z M49.57,31.43h3.71v-3.71h-3.71V31.43z"/>
<path d="M57.29,50.86H45.57V39.14h11.71V50.86z M49.57,46.86h3.71v-3.71h-3.71V46.86z"/>

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
