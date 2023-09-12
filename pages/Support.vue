<template>
    <div :class="bemm()">
      <div :class="[bemm('content'), 'content']">
        <section>
          <h1>Support</h1>
        </section>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useBemm } from "bemm";
  const bemm = useBemm("support");
  </script>
  
  <style lang="scss">
  .support {
    padding: var(--space);
  }
  </style>
  