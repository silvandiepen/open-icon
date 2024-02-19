<template>
    <div :class="bemm()">
        <div :class="bemm('control-container')">
            <span v-for="(v) in filteredOptions" @click="handleClick(v.value)"
                :class="[bemm('option'), bemm('option', `${v.label}`), bemm('option', selectedOptions.includes(v.value) ? 'active' : 'inactive')]">
                <span v-if="v.total && showTotal" :class="bemm('total')">{{ v.total }}</span>
                <Icon :class="bemm('icon')" v-if="v.icon" :name="v.icon" />
                <span :class="bemm('option-label')">{{ v.label }}</span>
            </span>
            <span v-if="limit" :class="[bemm('option'), bemm('option', 'show-all')]" @click="showAll = !showAll">
              <Icon :name="Icons.MORE" />
            </span>
            <span v-if="selectedOptions.length" :class="[bemm('option'), bemm('option', 'reset')]" @click="selectedOptions = []">
              <Icon :name="Icons.ARROW_ROTATE_LEFT" />
            </span>
        </div>
        <label for="test" :class="bemm('label')" v-if="label">
            {{ label }}
        </label>
    </div>
</template>

<script lang="ts" setup>
import { PropType, computed, watch, ref, ComputedRef } from "vue";
import { useBemm } from 'bemm';

import { Icons } from '@/icons';

import Icon from '@/components/Icon.vue';
import { SwitchOption } from "./InputSwitch.model";

const bemm = useBemm('input-options');

const props = defineProps({
    label: {
        type: String,
        default: ""
    },
    options: {
        type: Array as PropType<string[] | SwitchOption[]>,
        default: ""
    },
    limit: {
        type: Number,
        default: 0
    },
    orderBy: {
        type: String,
        default: ""
    },
    showTotal: {
        type: Boolean,
        default: false
    },


})

const showAll = ref(false);
const model = defineModel();

const emit = defineEmits(["update:modelValue"]);

const filteredOptions = computed(() => {

    let options = formattedOptions.value;

    if (props.orderBy) {
        options = options.sort((a: SwitchOption, b: SwitchOption) => {
            return Number(b[props.orderBy as keyof SwitchOption] ?? 0) - Number(a[props.orderBy as keyof SwitchOption] ?? 0);
        })
    }
    if (showAll.value || !props.limit) {
        return options;
    }


    const activeOptions = options.filter((v) => selectedOptions.value.includes(v.value));

    const limitedOptions = options.slice(0, props.limit);

    activeOptions.forEach((v) => {
        if (!limitedOptions.includes(v)) {
            limitedOptions.push(v)
        }
    })

    return limitedOptions;


}) as ComputedRef<SwitchOption[]>;

const formattedOptions = computed<SwitchOption[]>(() => {
    if (typeof props.options[0] == 'string') {
        return props.options.map((v) => {
            return {
                label: v,
                value: v,
                icon: null
            } as SwitchOption
        })
    }
    else if (typeof props.options[0] == 'object' && props.options[0].value && props.options[0].label) {
        return props.options as SwitchOption[]
    } else {
        return []
    }
})

const selectedOptions = ref<string[]>([]);

watch(() => selectedOptions.value, () => {
    console.log('changed')

    model.value = selectedOptions.value;
    emit('update:modelValue', selectedOptions.value)
}, {
    deep: true
})

const handleClick = (value: string) => {
    if (selectedOptions.value.includes(value)) {
        selectedOptions.value = selectedOptions.value.filter((v) => v !== value)
    } else {
        selectedOptions.value.push(value)
    }
}
</script>


<style lang="scss" src="./Form.scss"></style>