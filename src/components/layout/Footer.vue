<template>
    <div :class="bemm()">
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm'
    const bemm = useBemm('footer')
</script>