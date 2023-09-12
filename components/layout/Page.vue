<template>
    <div :class="bemm()">
        <slot></slot>
    </div>
</template>

<script lang="ts" setup>
import { useBemm } from 'bemm'
    const {bemm} = useBemm('navigation')
</script>