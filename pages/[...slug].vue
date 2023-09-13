<template>
    <div :class="bemm()">
      <div :class="[bemm('content'), 'content']">
        <ContentDoc />
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { useBemm } from "bemm";
  const bemm = useBemm("content");
  </script>
  
  <style lang="scss">
  .content {
    padding: var(--space);
  }
  </style>
  