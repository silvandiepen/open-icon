<template>
    <div :class="bemm()">
      <ColorMode></ColorMode>
    </div>
</template>

<script lang="ts" setup>
// import Language from "../control/Language.vue";
import ColorMode from "../control/ColorMode.vue";
import { useBemm } from 'bemm'
    const bemm = useBemm('footer')
</script>
<style lang="scss">
.footer{
    padding: var(--space)
}
</style>