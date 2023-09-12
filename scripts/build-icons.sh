#!/bin/bash

npx icon-components \
    --src assets/icons/icons \
    --dest components/Icon \
    --template assets/icons/template/component.vue.template \
    --remove-old \
    --removePrefix 'icon-' \
    --copy assets/icons/template/Icon.vue.template=Icon.vue \
    --inRoot \
    --types \
    --index \
    --list 