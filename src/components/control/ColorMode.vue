<template>
  <div :class="bemm()">
    <h3 :class="bemm('title')">
      <component :is="getIcon(Icons.COLORMODE)"></component>Color Mode</h3>
      <div :class="bemm('controls')">
    <button :class="[bemm('button'), colorMode == ColorMode.DARK ? bemm('button','active') : bemm('button','inactive')]" @click="setColorMode(ColorMode.DARK)">
      <component :class="[bemm('icon')]" :is="getIcon(Icons.MOON)" ></component>
      <span :class="bemm('name')">{{ ColorMode.DARK }}</span>
    </button>    
    <button :class="[bemm('button'), colorMode == ColorMode.LIGHT ? bemm('button','active') : bemm('button','inactive')]" @click="setColorMode(ColorMode.LIGHT)">
      <component :class="[bemm('icon'), colorMode == ColorMode.LIGHT ? bemm('icon','active') : bemm('icon','inactive')]" :is="getIcon(Icons.SUN)" ></component>
      <span :class="bemm('name')">{{ ColorMode.LIGHT }}</span>
    </button></div>
  </div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { ColorMode } from "@/types";
import { useColorMode } from "@/composables/useColorMode";
import { getIcon } from "@/icons";
import { Icons } from "@/icons/types";

const bemm = useBemm("colormode");

const { colorMode, setColorMode } = useColorMode();
</script>

<style lang="scss">
.colormode {

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
&--active{background-color: var(--primary); color: var(--primary-text)}
  }

  &__icon {
    height: 1em;
    width: 1em;
    font-size: 1.75em;
  }

  &__title{

display: flex; align-items: center;    .icon{
      font-size: 2em;
    }

  }
  &__controls {
    display: flex;
  }
}
</style>
