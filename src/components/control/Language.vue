<template>
  <div :class="bemm()">
    <ul :class="bemm('list')" v-if="renderedLocales">
      <li :class="bemm('item')" v-for="(locale, idx) in renderedLocales" :key="idx">
        <button :class="[bemm('link'),bemm('link',currentLocale == locale ? 'active' : 'inactive')]" @click="setLanguage(locale)">
          <span :class="bemm('text')">{{ t(`locales.${locale}`) }}</span>
        </button>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useBemm } from "bemm";
import { useLocale } from "@/composables/locales";
const bemm = useBemm("language");

const { t, currentLocale, locales } = useLocale();

const renderedLocales = computed(() => {
  return locales.value;
});

const setLanguage = (locale: any) => {
  currentLocale.value = locale;
};

onMounted(() => {
  console.log(locales);
});
</script>

<style lang="scss">

.language{
  &__list{
    display: flex; 
  }
  &__link{
    border: none;
    &--active{
      border: 1px solid red;
    }
  }
}
</style>