<template>
  <section class="container">
    <story title="green-bison">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You clamor across the burning sands to the gallant green horse. It neighs majestically and gallops across the dunes. The sand gives way to grassy knolls and hills and bursts of rock. The steed leaps gracefully over the rocks with increasing speed.</p>

        <p>With the path open, you spring ahead. You know the finish line is close, and you can't wait to be done.</p>
      </div>
      <div v-else>
        <p>The apes bring Mom back and leave the path so you can finish. You are almost done with the maze!</p>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/the-finish-line" class="chooser__choice chooser__choice-target">
            The Finish Line
          </nuxt-link>
        </nav>
      </Chooser>
    </story>
  </section>
</template>

<script>
  import Story from '~/components/Story.vue'
  import Chooser from '~/components/Chooser.vue'

  export default {
    components: {
      Story,
      Chooser
    }
  }
</script>

<style scoped>
  /* Special page styling */
</style>
