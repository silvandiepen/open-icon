<template>
  <div :class="bemm()">
    <div :class="[bemm('content'), 'content']">
      <section>
        <h1>Contact</h1>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
const bemm = useBemm("contact");
</script>

<style lang="scss">
.contact {
  padding: var(--space);
}
</style>
