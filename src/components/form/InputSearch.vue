<template>
    <div :class="bemm()" @click="unCollapse()">
        <label :class="bemm('label')" v-if="label">
            {{ label }}
        </label>
        <div :class="[bemm('control-container'), collapsed && bemm('control-container', 'collapsed')]">
            <Icon :class="bemm('icon')" :name="Icons.SEARCH"></Icon>
            <input :class="bemm('control')" :placeholder="placeholder" type="text" v-model="value" @blur="doCollapse()" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useBemm } from 'bemm';

import { Icons } from "@/icons";
import Icon from '@/components/Icon.vue';

const bemm = useBemm('input-search');

const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    placeholder: {
        type: String,
        default: ""
    },
    collapse: {
        type: Boolean,
        default: false
    }
})
const value = defineModel();
const collapsed = ref(props.collapse);

const unCollapse = () => {
    if (!props.collapse) return;
    collapsed.value = false;
}
const doCollapse = () => {
    if (!props.collapse) return;
    if (value.value === '') collapsed.value = true;
}
</script>


<style lang="scss" src="./Form.scss"></style>