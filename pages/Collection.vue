<template>
  <div :class="bemm()">
    <div :class="bemm('toolbar')">
      <h1>Collection</h1>
      <div 
        :class="bemm('search')">
        <Icon  :class="bemm('search-icon')" name="search"></Icon>
        <input
        :class="bemm('control')"
        type="search"
        v-model="filter"
        placeholder="Search"
      />
    </div>
     
      <span>
        <span :class="bemm('showing')">
         <template v-if="filteredIcons.length < icons.length">
            <strong>{{ filteredIcons.length }}</strong>/</template>{{ icons.length }} icons
        </span>
      </span>
    </div>
    <hr />
    <transition-group tag="ul" name="collection" :class="bemm('list')">
      <li
        :class="bemm('item')"
        v-for="(icon, index) in filteredIcons"
        :key="index"
      >
        <Icon :class="bemm('icon')" :name="icon"></Icon>
        <span :class="bemm('label')">{{ icon }}</span>
      </li>
    </transition-group>
  </div>
  <div :class="[bemm('content'),'content']">
    <ContentDoc path="/collection-description"/>
  </div>
      
</template>

<script lang="ts" setup>
import { useBemm } from "bemm";
import { Icons } from "~/components/Icon/types";
const bemm = useBemm("collection");

const filter = ref("");

const icons = Object.values(Icons);

const filteredIcons = computed(() => {
  if (!filter.value) return icons;
  return icons.filter((icon) => icon.includes(filter.value.toLowerCase()));
});
</script>

<style lang="scss">
.collection-enter-from,
.collection-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.collection-leave-active {
  position: absolute;
  left: 50%; top: 50%;
  z-index: 0;
}



.collection {
  padding: var(--space);
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
display: grid;
    grid-template-columns: repeat(auto-fill, minmax(10em, 1fr) ) ;
}
  &__item {
    transition: all 0.3s ease-in-out;
    text-align: center;
    align-items: center;
    justify-content: center;
    display: flex;
    aspect-ratio: 1/1;
    flex-direction: column;
    border-radius: 1em;
    &:hover {
      background-color: var(--primary);
    }
  }
  &__icon {
    font-size: 5em;
  }
  &__label {
    font-size: 1em;
    opacity: 0.5;
  }

  &__toolbar {
    gap: var(--space);
    display: flex;
    align-items: center;
  }
  &__search {
    border-radius: 0.5em;
    border: none;
    outline: 2px solid var(--foreground);

    opacity: 0.25;
    &:has(:focus),
    &:has(:not([value])) {
      opacity: 1;
    }
    &:has(:focus) {
      border: none;
      outline: 2px solid var(--primary);
    }
    display: flex;
    align-items: center;
  }
  &__control{   
    border: none; padding: 0.5em;
    line-height: 1em;
    font-size: 1.25em;
    outline: none;
    &:focus{
        outline: none;
    }
  }
  &__search-icon{
    width: 1em; height: 1em;
    margin-left: .25em;
    font-size: 2em;
  }
  &__content{
    padding: var(--space);
  }
}
</style>
