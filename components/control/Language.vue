<template>
  <div :class="bemm()">
    <ul :class="bemm('list')">
      <li :class="bemm('item')" v-for="(locale,idx) in locales" :key="idx">
        <!-- <button :class="bemm('link')" @click="setLanguage(locale)">
          <span :class="bemm('text')">{{t(`locales.${locale}`)}}</span>
        </button> -->
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>        

import { useBemm } from "bemm";
import { useLocale } from "@sil/locale";
const bemm = useBemm("language");


import { t, locales, currentLocale } from "~/data/locale";

const setLanguage = (locale:any)=>{
    currentLocale.value = locale
}

onMounted(()=>{
  console.log(locales)
})

</script>