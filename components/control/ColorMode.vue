<template>
  <div :class="bemm()">
  <button  :class="bemm('button')"  @click="toggleColorMode()"> 

    <Icon :class="bemm('icon')" :name="Icons.MOON" v-if="colorMode == ColorMode.DARK"></Icon>
    <Icon :class="bemm('icon')"  :name="Icons.SUN" v-if="colorMode == ColorMode.LIGHT"></Icon>
    <span :class="bemm('name')"> {{ colorMode }}</span>
  
</button></div>
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { ColorMode } from "@/types";
import Icon from "@/components/Icon/Icon.vue"
import { useColorMode } from "@/composables/useColorMode";
import { Icons } from "../Icon/types";

const bemm = useBemm("colormode");


const { colorMode, toggleColorMode } = useColorMode();

</script>

<style lang="scss">

.colormode{
  &__button{
    background-color: transparent;
    border: none; color: inherit;
    display: flex;
    align-items: center; justify-content: center;

  }
  &__icon{
    height: 1em; width: 1em;
    font-size: 1.75em;
  }
  &__name{
  }

}

</style>
