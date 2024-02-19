<template>
    <div :class="bemm()">
        <header :class="bemm('header')">
            <h1>{{ icon.title }}</h1>

        </header>

        <div :class="bemm('preview')">
            <Icon :name="icon?.value" :class="bemm('icon')"></Icon>
        </div>

        <div :class="bemm('content')">
            <button :class="bemm('download-button')" @click="downloadSvg()">
                <component :class="bemm('button-icon')" :is="getIcon(Icons.PATH1)"></component>
                <span :class="bemm('button-text')">Download SVG</span>
            </button>
            <button :class="bemm('download-button')" @click="downloadPng()">
                <component :class="bemm('button-icon')" :is="getIcon(Icons.IMAGE)"></component>
                <span :class="bemm('button-text')">Download PNG</span>
            </button>

            <pre>
                {{ icon }}

            </pre>

            <pre v-if="svgCode" :class="bemm('code')">
                {{ svgCode }}
            </pre>
        </div>

        <div :class="bemm('related')" v-if="relatedIcons.length">
            <h3>Related icons</h3>
            <ul :class="bemm('related-list')">
                <li @click="router.push(`/icon/${icon}`)" :class="bemm('related-icon')" v-for="icon in relatedIcons">
                    <Icon :name="icon.key" />
                </li>
            </ul>

        </div>
    </div>
</template>
    
<script lang="ts" setup>
import { useBemm } from 'bemm';
import { computed, onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

import { Icons } from '@/icons';
import Icon from '@/components/Icon.vue';
import { useIcons } from '@/composables/useIcons';

const { bemm } = useBemm('detail')
const { getIcon, getIconsByCategory } = useIcons();

const route = useRoute();
const router = useRouter();

const svgCode = ref(``);


const icon = computed(() => {
    return getIcon(route.params.icon as string);
})

const getDataUrl = (code: string) => {
    const encodedData = window.btoa(code);
    return `data:image/svg+xml;base64,${encodedData}`;
}


const downloadSvg = () => {
    var dl = document.createElement("a");
    document.body.appendChild(dl); // This line makes it work in Firefox.
    dl.setAttribute("href", getDataUrl(svgCode.value));
    dl.setAttribute("download", `${icon.value}.svg`);
    dl.click();
}

const createSvgFromString = (code: string): SVGAElement => {

    const parser = new DOMParser()

    const frag = parser.parseFromString(code, 'text/html').body.childNodes[0]

    return frag as SVGAElement;
}


const svgToPng = async (svg: SVGAElement) => {

    const { width, height } = { width: 1024, height: 1024 };

    svg.setAttribute('width', `${width}px`);
    svg.setAttribute('height', `${height}px`);

    const xml = new XMLSerializer().serializeToString(svg);
    const svg64 = btoa(xml);
    const b64Start = 'data:image/svg+xml;base64,';
    const image64 = b64Start + svg64;


    let image = new Image();


    const img = document.createElement('img');
    const canvas = document.createElement('canvas');

    canvas.setAttribute('width', `${width}px`);
    canvas.setAttribute('height', `${height}px`);

    image.onload = () => {

        console.log('but does it actually do anything?!', canvas);
        // @ts-ignore
        canvas.getContext('2d').drawImage(img, 0, 0);


    };

    image.src = image64;

    return {
        image,
        image64,
        canvas,
        png: canvas.toDataURL('image/png')
    }


}

const downloadPng = async () => {

    const imageData = await svgToPng(createSvgFromString(svgCode.value));

    // const image = new Image();
    // image.src = imageData.canvas.toDataURL('image/png') as string;
    document.body.append(imageData.image);

    console.log(imageData)



    const { href, name } = {
        href: imageData.image,
        name: `${icon.value}.png`
    }



    const link = document.createElement('a');

    link.innerHTML = 'download'
    link.download = name;
    // link.style.opacity = "0";
    link.href = href as any;


    const parent = document.querySelector('.detail') as HTMLElement;
    if (parent) parent.prepend(link);

    link.click();
    //  link.remove();



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

const relatedIcons = computed(() => {
    if (!icon.value) return [];
    console.log(icon.value)
    return getIconsByCategory(icon.value?.category);
})


onMounted(() => {
    getCode();
})

</script>
    

<style lang="scss">
.detail {
    padding: var(--space);

    display: flex;
    flex-direction: column;
    gap: 2em;

    &__header {
        width: 100%;
        display: flex;
        align-items: center;
        gap: 1em;
        // justify-content: space-between;
        grid-area: header;
    }

    &__related {
        display: flex;
        gap: 1em;
        flex-direction: column;
        width: 100%;


    }

    &__related-list {
        display: flex;
        gap: 1em;
        flex-wrap: wrap;

    }

    &__related-icon {
        border-radius: .25em;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        font-size: 3em;
        border: 3px solid var(--accent);

        display: flex;
        align-items: center;
        justify-content: center;
        padding: 1em;

        &:hover {
            border-color: var(--foreground);
        }

    }

    &__preview {
        grid-area: preview;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        border-radius: 1rem;
        padding: 4vw;
        aspect-ratio: 1 / 1;
        width: 50%;

        background-color: var(--accent);

        .icon {
            color: var(--foreground);
            opacity: .66;
            font-size: 15em;
        }
    }

    &__content {

        grid-area: content;
    }

    &__code {
        border: 2px solid var(--accent);
        // background-color: var(--accent);
        color: var(--foreground);
        overflow: scroll;
        padding: var(--space);
        border-radius: 1em;
        font-size: .75em;
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
}
</style>