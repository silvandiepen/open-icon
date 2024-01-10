<template>
  <h1 :class="bemm()">
    <component :class="bump ? 'bump' : ''" :is="getIcon(randomIcon)"></component>
    <span>

      Open Icon
      <span>Foundation</span>
    </span>
  </h1>
</template>

<script lang="ts" setup>
import { ref, onMounted, watch } from "vue";
import { useBemm } from "bemm";

import { getIcon } from "@/icons";
import { Icons } from "@/icons/types";

const bemm = useBemm("logo");
const bump = ref(false)

const randomIcon = ref();
const getRandomIcon = () => {
  const keys = Object.values(Icons)
  const randomIndex = Math.floor(Math.random() * keys.length)
  return keys[randomIndex];
}
const setFavicon = ()=>{
  const favicon = document.querySelector('link[rel="icon"]') as HTMLLinkElement;
  favicon.href = `/icons/icon_${randomIcon.value}.svg`;
}

watch(() => randomIcon.value, () => {
  setFavicon();
  bump.value = true;
  setTimeout(() => {
    bump.value = false;
  }, 500)
})
randomIcon.value = getRandomIcon()

onMounted(() => {

  setInterval(() => {
    randomIcon.value = getRandomIcon()
  }, 5000)

})

</script>

<style lang="scss">
.logo {
  font-size: 1.25em;
  color: inherit;

  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 1em;



  .icon {
    flex-shrink: 0;
    //idth: 1.25em;
    background-color: var(--background);
    color: var(--foreground);
    //border: 2px solid currentColor;
    border-radius: .1em;
    font-size: 1.5em;
    width: 2em;
    height: 2em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1em;

.page--home &{
    background-color: var(--primary);
    color: var(--primary-text);

}

    &.bump svg {

      animation: bump .5s forwards;

      @keyframes bump {
        20% {

          transform: scale(.5) translateX(-50%) rotate(45deg);
        }

        20.5% {
          transform: scale(.5) translateX(50%) rotate(-45deg);
        }


        50% {

          transform: scale(1.2);
        }

        60% {
          transform: scale(1)
        }
      }
    }

  }

  span span {
    display: block;
    // font-weight: normal;
    opacity: 0.5;
    // display: block;
    text-transform: uppercase;
    font-size: .7em;

    letter-spacing: .05em;
  }

  @media screen and (max-width: 72em) {
    span {
      display: flex;
      align-items: center;
      gap: 1em;

      span {
        display: none;
      }
    }
  }
}</style>
