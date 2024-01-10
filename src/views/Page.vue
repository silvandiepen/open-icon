<template>
    <div :class="bemm()">
        <div :class="[bemm('content'), 'content']">
            <component :is="pageContent"></component>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { useBemm } from 'bemm';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

const { bemm } = useBemm('page');


const route = useRoute();

const pageContent = ref();

const loadContent = async () => {

    pageContent.value = await import(`@/content/${route.params.page}.md`).then(res => {
        return res.default;
    })



    // pageContent.value = content;


}

loadContent();

</script>

<style lang="scss">
.page {
    position: relative;
    padding-block: 4vw;
    min-height: 100vh;

    @media screen and (max-width: 72em) {
        padding: 2em;
    }

    &::before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: calc(25vw - 15em);
        min-width: 1.5em;
        height: 100%;

        background-color: var(--accent);
        border-bottom-right-radius: 5em;
    }
}
</style>
    
    