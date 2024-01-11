<template>
    <div :class="bemm()">
        <h1>{{ icon }}</h1>

        <component :class="bemm('preview')" v-if="icon" :is="getIcon(icon)"></component>


    </div>
</template>
    
<script lang="ts" setup>
import { getIcon } from '@/icons';
import { useBemm } from 'bemm';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
const { bemm } = useBemm('detail')

const route = useRoute();

const getCode = async ()=>{
    const code = await    fetch(`https://open-icon.org/icons/icon_${icon.value}.svg`).then((r)=>r);

    console.log(code.text());

}

onMounted(()=>{
    getCode();

})

const icon = computed(() => {
    return route.params.icon as string;
})
</script>
    

<style lang="scss">

.detail {
    padding: var(--space);
    
    &__preview {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 15em;
        border:3px solid var(--primary);
        border-radius: 1rem;
        padding: 4vw;
    }
}
</style>