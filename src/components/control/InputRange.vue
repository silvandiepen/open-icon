<template>
    <div :class="bemm()">
        <label :class="bemm('label')" v-if="label" :for="id"></label>
        <div :class="bemm('control-container')">
            <div v-if="currentIcon" :class="bemm('icon-container')">
                <component :is="getIcon(currentIcon)"></component>
            </div>
            <div :class="bemm('min')">{{ min }}</div>
            <input :class="bemm('control')" :id="id" type="range" step="0.1" v-model="model" :min="min" :max="max" />
            <div :class="bemm('max')">{{ max }}</div>
            <div :class="bemm('reset')" @click="model = ''">
                <component :is="getIcon(Icons.CLOSE)"></component>
            </div>
        </div>

    </div>
</template>

<script lang="ts" setup>
import { PropType, ref, computed } from "vue";
import { useBemm } from 'bemm';

import { getIcon, Icons } from '@/icons';


const bemm = useBemm('input-range');

const model = defineModel();

const id = ref(`input-range-${Math.random().toString(36).substr(2, 9)}`);

const currentIcon = computed(() => {
    if (props.icon) props.icon;
    return null;
})


const props = defineProps({
    label: {
        type: String as PropType<string>,
        default: ''
    },

    value: {
        type: String as PropType<string>,
        default: '10'
    },
    min: {
        type: Number as PropType<number>,
        required: true

    }, max: {
        type: Number as PropType<number>,
        required: true
    },
    icon: {
        type: String as PropType<Icons>,
        default: ''
    },
    reset: {
        type: Boolean as PropType<boolean>,
        default: false

    }
})


</script>

<style lang="scss">
.input-range {

    &__control-container {
        display: flex;
        align-items: center;
        padding: 1em;
        // border-radius: .5em;
        // background-color: var(--background);

        // &:focus-within {
        //     outline: 2px solid var(--primary);
        // }
    }

    &__icon-container {
        padding: 1em;

        .icon {
            font-size: 1em;
        }
    }

    &__reset {
        padding: 1em;
    }

    &__min, &__max{
        opacity: .5;
    padding: .5em;
    }

    &__control {
        // border: none;
        // padding-block: 1em;
        // font-size: 1em;
        // border: none;
        // background-color: transparent;
        // color: var(--foreground);


        appearance: none;
        width: 10rem;
        height: .5rem;

        outline: none;
        border-radius: .25rem;
        background-color: var(--foreground);

        &::-webkit-slider-thumb {
            appearance: none;
            width: 1.25rem;
            height: 1.25rem;
            background-color: var(--background);
            border: .2rem solid var(--foreground);
            border-radius: 1rem;
            cursor: pointer;
        }

        &:focus {
        background-color: var(--primary);
            outline: none;
        }
    }
}
</style>