<template>
  <div class="container">
    <Chooser title="Give Up?">
      <p>You're tired, you're frustrated and you're ready to go home.</p>

      <nav slot="choices" class="chooser__choices">
        <nuxt-link to="/turn-around" class="chooser__choice chooser__choice-target">
            Turn Around
          </nuxt-link>
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
