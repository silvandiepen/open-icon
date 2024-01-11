<template>
    <div :class="bemm()">
        <aside :class="bemm('sidebar')">
            <ul :class="bemm('tree')">
                <li :class="bemm('tree-item')" v-for="item in tree">
                    <a :class="bemm('tree-link')" :href="item.link">{{ item.label }}</a>
                </li>
            </ul>
        </aside>
        <div :class="[bemm('content'), 'content']">
            <component :is="pageContent"></component>
        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { useBemm } from 'bemm';
import { nextTick, shallowRef, watch, ref } from 'vue';
import { useRoute } from 'vue-router';

const { bemm } = useBemm('page');
const route = useRoute();
const pageContent = shallowRef();

const loadContent = async () => {
    pageContent.value = await import(`@/content/${route.params.page}.md`).then(res => { return res.default })
}
type Tree = { label: string, link: string }[]

const tree = ref<Tree>([])

const getSubcategories = () => {
    const tempTree: Tree = [];
    const h2s = document.querySelectorAll('h2');

    h2s.forEach((h2) => {

        const id = h2.id ? h2.id : h2.textContent?.toLowerCase().replace(/\s/g, '-').replace(/[^a-z0-9-]/g, '');

        if (!h2.id) h2.setAttribute('id', id || '');

        tempTree.push({
            label: h2.textContent || '',
            link: `#${id}`
        })
    })

    if (tempTree.length > 0) tree.value = tempTree;
}


watch(() => pageContent.value, () => {
    nextTick(() => {
        getSubcategories();
    })
})

loadContent();

</script>

<style lang="scss">
.page {
    position: relative;
    min-height: 100vh;

    display: flex;
    top: 0;

    @media screen and (max-width: 72em) {
        flex-direction: column;
    }

    &__content {

        padding: 4vw;
    }

    &__sidebar {
        padding: var(--space);
        background-color: var(--accent);
        display: flex;
        height: fit-content;

    @media screen and (min-width: 72em) {        position: sticky;
        top: 0;
        flex-direction: column;
        min-height: 100vh;
    }


    }

    &__tree {
        @media screen and (min-width: 72em) {  
        padding-top: 8em;
        }
        &-item {
            
        }

        &-link {
            display: block;
            padding: 1em;
            text-decoration: none;
            color: currentColor;
            border-radius: 1em;
        }
    }
}
</style>
    
    