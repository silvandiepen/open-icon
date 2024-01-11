<template>
    <div :class="bemm()">
        <header :class="bemm('header')">
            <h1>{{ icon }}</h1>
            <button :class="bemm('download-button')" @click="download()">
                <component :class="bemm('button-icon')" :is="getIcon(Icons.ARROW_DOWN)"></component>
                <span :class="bemm('button-text')">Download SVG</span>
            </button>

        </header>

        <div :class="bemm('preview')">
            <component :is="getIcon(icon)" :class="bemm('icon')"></component>
        </div>

        <div :class="bemm('content')">

            <pre v-if="svgCode" :class="bemm('code')">
                {{ svgCode }}
            </pre>


        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { getIcon, Icons } from '@/icons';
import { useBemm } from 'bemm';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
const { bemm } = useBemm('detail')

const route = useRoute();

const svgCode = ref(``);

const getDataUrl = (code: string) => {
    const encodedData = window.btoa(code);
    return `data:image/svg+xml;base64,${encodedData}`;
}

const download = () => {
    var dl = document.createElement("a");
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute("href", getDataUrl(svgCode.value));
    dl.setAttribute("download", `${icon.value}.svg`);
    dl.click();
}

const getCode = async () => {
    const code = await fetch(`https://open-icon.org/icons/icon_${icon.value}.svg`).then((res) => res.text()).then((res) => {
        return res.substring(
            res.indexOf("<svg ") - 1,
            res.lastIndexOf("</svg>") + 6
        );
    });

    svgCode.value = code;

}

onMounted(() => {
    getCode();
})

const icon = computed(() => {
    return route.params.icon as string;
})
</script>
    

<style lang="scss">
.detail {
    padding: var(--space);

    // display: grid;

    // grid-template-areas: none;
    display: flex; flex-wrap: wrap;
    
    &__header {
    width: 100%; 
    display: flex;  
    align-items: center;
    gap: 1em;
    // justify-content: space-between;
        grid-area: header;
    }

    &__preview {
        grid-area: preview;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        border: 3px solid var(--primary);
        border-radius: 1rem;
        padding: 4vw;
        aspect-ratio: 1 / 1;
        width: 50%;

        .icon {
            font-size: 15em;
        }
    }

    &__content {

        grid-area: content;
    }

    &__code {
        background-color: var(--foreground);
        color: var(--background);
        padding: var(--space);
        border-radius: 1em;
        font-size: .875em;
        line-height: 1.5;
        width: 50%;
    }

    &__download-button {
        padding: 1em;
        background-color: var(--secondary);
        color: var(--secondary-text);
        border-radius: 2em;
        font-size: 1em;
        border: none;
        display: flex;

        align-items: center;
        justify-content: center;
    }

    &__button-icon {
        font-size: 1.5em;
        margin-right: .5em;

    }
}</style>