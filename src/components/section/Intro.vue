<template>
  <div :class="bemm()">

    <div :class="bemm('container')">
      <div class="random-icon">
        <component :class="bump ? 'bump' : ''" :is="getIcon(randomIcon)"></component>
      </div>
      <div :class="bemm('content')">
        <h1>
          <strong>Open</strong> <strong>Icon</strong><span>foundation</span>
        </h1>

        <hr />

        <h2>Through accessible icons, we're bridging cultures with a universal visual language, inspiring boundless
          creativity worldwide.</h2>

        <hr />
        <div :class="bemm('numbers')">
          <div :class="bemm('entry')" v-for="(number, index) in numbers" :key="index">
            <div :class="bemm('number')">{{ number.total }}</div>
            <div :class="bemm('label')">{{ number.description }}</div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, computed, watch } from "vue";
import { useBemm } from "bemm";
import { getIcon, Icons } from "@/icons";


const bump = ref(false)
const randomIcon = ref();
const getRandomIcon = () => {
  const keys = Object.values(Icons)
  const randomIndex = Math.floor(Math.random() * keys.length)
  return keys[randomIndex];
}

randomIcon.value = getRandomIcon()
onMounted(() => {

  setInterval(() => {
    randomIcon.value = getRandomIcon()
  }, 5000)

})

watch(() => randomIcon.value, () => {
  bump.value = true;
  setTimeout(() => {
    bump.value = false;
  }, 500)
})



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

// const { t } = useLocale();
</script>

<style lang="scss">
.random-icon {
  position: absolute;
  right: 0;
  bottom: 0%;
  transform: translate(25%, 25%);
  font-size: 75vmin;
  // background-color: var(--foreground);
  color: var(--background);
  border-radius: .1em;
  width: 1em;
  height: 1em;
  color: white;

  .icon {
    // [color-mode="dark"] & {
    //   opacity: .2;
    // }

    svg {

      rect,
      path,
      circle,
      polygon {
        fill: var(--background);
      }
    }

    &.bump svg {

      animation: bump .5s forwards;

      @keyframes bump {
        20% {

          transform: scale(.75);
        }



        50% {

          transform: scale(1.1);
        }

        60% {
          transform: scale(1)
        }
      }
    }
  }
}

.intro {
  color: var(--primary-text);
  width: 100vw;
  position: relative;
  display: block;
  z-index: 5;
  padding:var(--space);



  hr {
    background-color: currentColor;
  }

  &__container {
    overflow: hidden;
    background-color: var(--primary);
    color: var(--primary-text);
    position: relative;
    display: block;

   

    width: 100%;
    // max-width: 1440px;
    margin: auto;
    border-radius: 2em;
    padding: max(8vw, 2em);
  }

  &__content {
    position: relative;
    z-index: 5;

  }

  h2 {
    font-size: 3em;
    // margin: auto;
    max-width: 960px;

    @media screen and (max-width: 72em) {
      font-size: 1.5em;
    }
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

    @media screen and (max-width: 72em) {
      font-size: 2em;
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
}</style>
