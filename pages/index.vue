<template>
  <div :class="bemm()">

    <Intro></Intro>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm';
const {bemm} = useBemm('home')
</script>
