<template>
  <div :class="bemm()">

    <Intro></Intro>
  </div>
</template>
  
<script lang="ts" setup>
import { useBemm } from 'bemm';
import Intro from "@/components/section/Intro.vue";
const { bemm } = useBemm('home')
</script>
  