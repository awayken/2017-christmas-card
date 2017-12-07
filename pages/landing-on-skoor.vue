<template>
  <section class="container">
    <story v-if="$store.state.datAge === 'old'" title="Landing on Skoor">
      <p>This copy is for old P. Ditty.</p>

      <nav slot="choices">
        <a href="/choice1">Choice One</a>
        <a href="/choice2">Choice Two</a>
      </nav>
    </story>

    <story v-if="$store.state.datAge === 'young'" title="Landing on Skoor">
      <p>This copy is for young P. Ditty.</p>

      <nav slot="choices" class="story__choices">
        <a href="/choice1">Choice One</a>
        <a href="/choice2">Choice Two</a>
      </nav>
    </story>
  </section>
</template>

<script>
  import Story from '~/components/Story.vue'

  export default {
    components: {
      Story
    }
  }
</script>

<style scoped>
  /* Special page styling */
</style>
