#!/bin/bash

npx icon-components \
    --src src/assets/icons/icons \
    --dest src/icons \
    --template src/assets/icons/template/component.vue.template \
    --remove-old \
    --removePrefix 'icon-' \
    --removeAttrs id class style \
    --copy src/assets/icons/template/Icon.vue.template=Icon.vue \
    --inRoot \
    --types \
    --index \
    --indexTemplate src/assets/icons/template/index.ts.template \
    --parentIndex \
    --list 