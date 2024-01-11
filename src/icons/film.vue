<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<path d="M63,6H9C7.34,6,6,7.34,6,9v54c0,1.66,1.34,3,3,3h54c1.66,0,3-1.34,3-3V9C66,7.34,64.66,6,63,6z M56,38h4v5h-4V38z M56,29h4
	v5h-4V29z M60,25h-4v-5h4V25z M52,34H20V12h32V34z M16,43h-4v-5h4V43z M12,34v-5h4v5H12z M16,25h-4v-5h4V25z M12,47h4v5h-4V47z
	 M20,38h32v22H20V38z M56,47h4v5h-4V47z M60,16h-4v-4h4V16z M16,12v4h-4v-4H16z M12,56h4v4h-4V56z M56,60v-4h4v4H56z"/>

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
