<template>
    <div :class="bemm()">
        <div :class="[bemm('content'),'content']">
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
    @media screen and (max-width: 96ch){
        padding: 2em;
    }
    &::before{
        content: "";
        position: absolute; left: 0; top: 0; width: calc(25vw - 200px); min-width: 2em; height: 100%; 
border-right: 2px solid black;
opacity: .15;
    }
//     &__content {
//         margin: auto;
//         max-width: 800px;
//         width: 100%;
//         padding: var(--space);

//         line-height: 1.5;


//         h1,
//         h2,
//         h3,
//         h4,
//         h5,
//         h6,
//         ul,
//         ol,
//         p {
//             margin: 0;

//             &+* {
//                 margin-top: 1em;
//             }
//         }

//         li strong:first-child {
//             display: flex;

//         }

//         li {
//             &+li {
//                 margin-top: 1em;
//             }
//         }

//         ul li:not(:has(strong)) {
//  padding-left: 1em;
// position: relative;
//             &::before {
//                 width: .5em; height: .5em;background-color: var(--primary);
//                 top: .75em; 
// content: "";                left: 0; 
//                 transform: translateY(-50%); 
//                 border-radius: 50%;
//                 position: absolute;
//             }
//         }
//     }
}</style>
    
    