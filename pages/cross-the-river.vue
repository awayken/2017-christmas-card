<template>
  <section class="container">
    <story title="Sure Footed">
      <div v-if="$store.state.readingLevel === 'old'">
        <p></p>
      </div>
      <div v-else>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/" class="chooser__choice chooser__choice-target">
            Choice 1
          </nuxt-link>
          <nuxt-link to="/" class="chooser__choice chooser__choice-target">
            Choice 2
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
