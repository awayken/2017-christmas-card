<template>
  <main>
    <story title="Crash Landing">
      <p>Copy of the crash landing.</p>

      <nav slot="choices">
        <a href="/choice1">Choice One</a>
        <a href="/choice2">Choice Two</a>
      </nav>
    </story>

    <story title="Crash Landing 2">
      <p>This copy will show on the page.</p>
    </story>
  </main>
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
