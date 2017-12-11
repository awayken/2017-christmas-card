<template>
  <nav class="container">
    <nuxt-link to="/" class="back">Back</nuxt-link>
    <ReadingLevelToggle :currentLevel="$store.state.readingLevel" :readingLevels="$store.state.readingLevels" />
  </nav>
</template>

<script>
  import ReadingLevelToggle from '~/components/ReadingLevelToggle.vue'

  export default {
    components: {
      ReadingLevelToggle
    }
  }
</script>

<style>
  nav {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 4px 0;
  }

  .back::before {
    content: "< ";
    display: inline;
  }
</style>

