<template>
  <div class="container">
    <Chooser title="Lost?">
      <p>You're tired, you're frustrated and you're ready to give up.</p>

      <nav slot="choices" class="chooser__choices">
        <a :href="$router.options.base" class="chooser__choice chooser__choice-target">Start Over</a>
      </nav>
    </Chooser>
  </div>
</template>

<script>
  import Chooser from '~/components/Chooser.vue'

  export default {
    components: {
      Chooser
    }
  }
</script>
