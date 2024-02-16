<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
<svg x="0px" y="0px" viewBox="0 0 72 72" style="enable-background:new 0 0 96 96;" xml:space="preserve">
    
<g>
	<path d="M9,66h54c1.66,0,3-1.34,3-3V9c0-1.66-1.34-3-3-3H9C7.34,6,6,7.34,6,9v54C6,64.66,7.34,66,9,66z M56,12h4v4h-4V12z M56,20h4
		v5h-4V20z M56,29h4v5h-4V29z M56,38h4v5h-4V38z M56,47h4v5h-4V47z M56,56h4v4h-4V56z M20,12h32v22H20V12z M20,38h32v22H20V38z
		 M12,12h4v4h-4V12z M12,20h4v5h-4V20z M12,29h4v5h-4V29z M12,38h4v5h-4V38z M12,47h4v5h-4V47z M12,56h4v4h-4V56z"/>
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
