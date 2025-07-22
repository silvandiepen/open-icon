<template>
  <div id="app">
    <h1>Open Icon - Vue Basic Example</h1>
    
    <section>
      <h2>Icon Sizes</h2>
      <div class="icon-row">
        <Icon name="heart-m" size="xs" />
        <Icon name="heart-m" size="s" />
        <Icon name="heart-m" size="m" />
        <Icon name="heart-m" size="l" />
        <Icon name="heart-m" size="xl" />
      </div>
    </section>

    <section>
      <h2>Using Aliases</h2>
      <div class="icon-row">
        <Icon name="plus" /> <!-- maps to add-m -->
        <Icon name="search" /> <!-- maps to search-m -->
        <Icon name="settings" /> <!-- maps to settings-m -->
        <Icon name="heart" /> <!-- maps to heart-m -->
      </div>
    </section>

    <section>
      <h2>With Colors</h2>
      <div class="icon-row">
        <Icon name="heart-m" class="text-red" />
        <Icon name="star-m" class="text-yellow" />
        <Icon name="check-m" class="text-green" />
        <Icon name="info-m" class="text-blue" />
      </div>
    </section>

    <section>
      <h2>Animated Icons</h2>
      <div class="icon-row">
        <Icon name="loading-m" :animated="true" />
        <Icon name="heart-m" :animated="true" />
      </div>
    </section>
  </div>
</template>

<script setup>
import Icon from './components/Icon.vue';
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
}

section {
  margin: 2rem 0;
}

h2 {
  margin-bottom: 1rem;
  color: #333;
}

.icon-row {
  display: flex;
  gap: 1rem;
  align-items: center;
}

.text-red { color: #ef4444; }
.text-yellow { color: #eab308; }
.text-green { color: #22c55e; }
.text-blue { color: #3b82f6; }
</style>