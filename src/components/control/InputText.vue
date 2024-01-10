<template>
    <div :class="bemm()">
        <label :class="bemm('label')" v-if="label" :for="id"></label>
        <div :class="bemm('control-container')">
            <div v-if="currentIcon" :class="bemm('icon-container')">
                <component :is="getIcon(currentIcon)"></component>
            </div>
            <input :class="bemm('control')" :id="id" :type="type" :placeholder="placeholder" v-model="model" />
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


const bemm = useBemm('input-text');

const model = defineModel();

const id = ref(`input-text-${Math.random().toString(36).substr(2, 9)}`);

const currentIcon = computed(() => {

    if (props.icon) props.icon;

    if (props.type === 'search') return Icons.SEARCH;
    return null;
})

const props = defineProps({
    type: {
        type: String as PropType<'text' | 'password' | 'search'>,
        default: 'text'
    },
    label: {
        type: String as PropType<string>,
        default: ''
    },
    placeholder: {
        type: String as PropType<string>,
        default: ''
    },
    value: {
        type: String as PropType<string>,
        default: ''
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
.input-text {

    &__control-container {
        display: flex;
        align-items: center;
        // padding: 1em;
        border-radius: .5em;
        background-color: var(--background);

        &:focus-within {
            outline: 2px solid var(--primary);
        }
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

    &__control {
        // border: none;
        padding-block: 1em;
        font-size: 1em;
        border: none;
        background-color: transparent;
        color: var(--foreground);
        &::placeholder {
       opacity: .5; }

        &::-webkit-search-cancel-button {
            -webkit-appearance: none;
        }

        &:focus {
            outline: none;
        }
    }
}
</style>