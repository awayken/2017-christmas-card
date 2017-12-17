<template>
  <article>
    <Navigation />

    <main class="main">
      <nuxt />

      <StartOver />
    </main>

    <Bottom />
  </article>
</template>

<script>
  import Navigation from '~/components/Navigation'
  import StartOver from '~/components/StartOver'
  import Bottom from '~/components/Bottom'

  export default {
    components: {
      Navigation,
      StartOver,
      Bottom
    }
  }
</script>
