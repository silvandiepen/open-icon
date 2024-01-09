<template>
  <h1 :class="bemm()">
    Open Icon
    <span>Foundation</span>
  </h1>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm("logo");
</script>

<style lang="scss">
.logo {
  font-size: 1.25em;
  span {
    font-weight: normal;
    opacity: 0.5;
    // display: block;
    // text-transform: uppercase;
    font-size: .75em;
  }
}
</style>
