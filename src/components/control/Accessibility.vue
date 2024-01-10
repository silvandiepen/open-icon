<template>
  <div :class="bemm()">
    <h3 :class="bemm('title')">
      <component :is="getIcon(Icons.ACCESSIBILITY_CIRCLE)"></component>Accessibility
    </h3>
    <div :class="bemm('controls')">
      <button
        :class="[bemm('button'), bemm('button', FontSize.SMALL),fontSize == FontSize.SMALL ? bemm('button', 'active') : bemm('button', 'inactive')]"
        @click="setFontSize(FontSize.SMALL)">
        <component :class="[bemm('icon')]" :is="getIcon(Icons.ACCESSIBILITY)"></component>
        <span :class="bemm('name')">{{ FontSize.SMALL }}</span>
      </button> <button
        :class="[bemm('button'),bemm('button', FontSize.MEDIUM), fontSize == FontSize.MEDIUM ? bemm('button', 'active') : bemm('button', 'inactive')]"
        @click="setFontSize(FontSize.MEDIUM)">
        <component :class="[bemm('icon')]" :is="getIcon(Icons.ACCESSIBILITY)"></component>
        <span :class="bemm('name')">{{ FontSize.MEDIUM }}</span>
      </button> <button
        :class="[bemm('button'), bemm('button', FontSize.LARGE), fontSize == FontSize.LARGE ? bemm('button', 'active') : bemm('button', 'inactive')]"
        @click="setFontSize(FontSize.LARGE)">
        <component :class="[bemm('icon')]" :is="getIcon(Icons.ACCESSIBILITY)"></component>
        <span :class="bemm('name')">{{ FontSize.LARGE }}</span>
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { FontSize } from "@/types";
import { useUI } from "@/composables/useUI";
import { getIcon } from "@/icons";
import { Icons } from "@/icons/types";

const bemm = useBemm("a11y");

const { fontSize, setFontSize } = useUI();
</script>

<style lang="scss">
.a11-y {
  display: flex; 
  gap : 1em; 
  flex-direction: column;
  &__button {
    background-color: transparent;
    border: none;
    color: inherit;
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: .5em;
    padding: 1em;
    gap: .5em;

    &--active {
      background-color: var(--primary);
      color: var(--primary-text)
    }
    &--small{
      .icon{ font-size: 1em;}
    }
    &--medium{
      .icon{ font-size: 1.5em;}
    }
    &--large{
      .icon{ font-size: 2 em;}
    }
  }

  &__icon {
    height: 1em;
    width: 1em;
    font-size: 1.75em;
  }

  &__title {

    display: flex;
    align-items: center;

    .icon {
      font-size: 2em;
    }

  }

  &__controls {
    display: flex;
  }
}</style>
