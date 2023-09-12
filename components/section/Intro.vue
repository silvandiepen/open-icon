<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
      <h1>
        <strong>Open</strong> <strong>Icon</strong><span>foundation</span>
      </h1>

      <hr />

      <h2>An open source collection of Design Principles and methods.</h2>

      <hr />
      <div :class="bemm('numbers')">
        <div
          :class="bemm('entry')"
          v-for="(number, index) in numbers"
          :key="index"
        >
          <div :class="bemm('number')">{{ number.total }}</div>
          <div :class="bemm('label')">{{ number.description }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { useLocale } from "@sil/locale";

import { Icons } from "../Icon/types";

const numbers = computed(() => {
  return [
    {
      total: Object.keys(Icons).length,
      description: "Icons",
    },
    {
      total: 2,
      description: "Contributors",
    },
  ];
});

const { bemm } = useBemm("intro");

const { t } = useLocale();
</script>

<style lang="scss">
.intro {
  background-color: var(--primary);
  hr {
    background-color: var(--primary-text);
  }
  &__container {
    width: 100%;
    // max-width: 1440px;
    margin: auto;

    padding: var(--space);
  }

  h2 {
    font-size: 3em;
    margin: auto;
    max-width: 960px;
  }
  h1 {
    font-size: 5em;
    word-break: break-all;
    line-height: 1;
    width: fit-content;
    strong {
      display: block;
    }
    span {
      //   display: block;
      font-weight: normal;
      //   font-size: 0.5em;
      //   text-align: right;
    }
  }

  &__numbers {
    display: flex;
    gap: var(--space);
  }
  &__number {
    font-size: 4em;
    font-weight: bold;
  }
  &__label {
    font-size: 1.25em;
  }
}
</style>
