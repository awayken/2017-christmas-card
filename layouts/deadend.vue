<template>
  <div :class="$store.state.readingLevel + 'reader'">
    <Navigation homeButton="true" />

    <main class="main">
      <nuxt />
    </main>

    <Bottom />
  </div>
</template>

<script>
  import Navigation from '~/components/Navigation'
  import Bottom from '~/components/Bottom'

  export default {
    components: {
      Navigation,
      Bottom
    }
  }
</script>
