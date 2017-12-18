<template>
  <div class="container">
    <Chooser title="Lost?">
      <p>You're tired, you're frustrated and you're ready for it to end.</p>

      <nav slot="choices" class="chooser__choices">
        <a :href="$router.options.base" class="chooser__choice chooser__choice-target">Give Up and Start Over</a>
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
