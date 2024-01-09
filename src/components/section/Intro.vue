<template>
  <div :class="bemm()">
    <div :class="bemm('container')">
      <h1>
        <strong>Open</strong> <strong>Icon</strong><span>foundation</span>
      </h1>

      <hr />

      <h2>Through accessible icons, we're bridging cultures with a universal visual language, inspiring boundless creativity worldwide.</h2>

      <hr />
      <div class="random-icon">
        <Icon :name="randomIcon"></Icon>
      </div>
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
import { ref, onMounted, computed } from "vue";
import { useBemm } from "bemm";
// import { useLocale } from "@/composables/locales";
import Icon from "@/icons/Icon.vue";
import { Icons } from "@/icons/types";


const randomIcon = ref();
const getRandomIcon = ()=>{
  const keys = Object.values(Icons)
  const randomIndex = Math.floor(Math.random() * keys.length)
  return keys[randomIndex];
}

onMounted(()=>{

  setInterval(()=>{
    randomIcon.value = getRandomIcon()
  },3000)

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

.random-icon{
  position: absolute; right: 0; top: 50%; 
  transform: translate(25%,-50%);
  font-size:50vmin;
  background-color: var(--foreground);
  color: var(--background);
  border-radius: .1em;
  width: 1em; height: 1em;
}

.intro {
  background-color: var(--primary);
  color: var(--primary-text);
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
    // margin: auto;
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
