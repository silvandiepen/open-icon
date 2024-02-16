<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<circle cx="36" cy="36" r="22.5"/>
<path d="M36,14.53c0-0.56-0.46-1.03-1.03-1
	C23.02,14.06,13.5,23.92,13.5,36s9.52,21.94,21.47,22.48c0.56,0.03,1.03-0.44,1.03-1"/>
<line x1="27" y1="18" x2="27" y2="54"/>
<line x1="22.5" y1="18" x2="22.5" y2="54"/>
<line x1="18" y1="27" x2="18" y2="45"/>
<line x1="31.5" y1="16.4" x2="31.5" y2="57.9"/>

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
