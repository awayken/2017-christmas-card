<template>
  <nav>
    <div class="container">
      <nuxt-link to="/" class="back">Back</nuxt-link>
      <ReadingLevelToggle :currentLevel="$store.state.readingLevel" :readingLevels="$store.state.readingLevels" />
    </div>
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

<style scoped>
  nav {
    background: #276f3f;
    line-height: 1.5;
    padding: .5em 0;
  }

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .back::before {
    content: "< ";
    display: inline;
  }
</style>

