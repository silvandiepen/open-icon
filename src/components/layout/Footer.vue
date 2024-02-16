<template>
    <div :class="bemm()">
        <ColorMode :class="bemm('item')"></ColorMode>
        <Accessibility :class="bemm('item')"></Accessibility>

    </div>
</template>

<script lang="ts" setup>
// import Language from "../control/Language.vue";
import ColorMode from "@/components/control/ColorMode.vue";
import Accessibility from "@/components/control/Accessibility.vue";
import { useBemm } from 'bemm'
const bemm = useBemm('footer')

</script>
<style lang="scss">
.footer {
    display: flex;
    gap: 1em;
    padding: var(--space);
    @media screen and (max-width: 72em) {
    padding: calc(var(--space) / 2);
    }

    @media screen and (max-width: 72em) {
        flex-direction: column;
        // align-items: center;
        // justify-content: center;
    }

    &__item {
        border-radius: var(--border-radius, 1em);
        // border: 2px solid var(--primary);
        background-color: var(--accent);
        padding: 1em;
        display: flex;

        @media screen and (max-width: 72em) {
            flex-direction: row;
            justify-content: space-between;
            flex-wrap: wrap;
        }
    }
}</style>

