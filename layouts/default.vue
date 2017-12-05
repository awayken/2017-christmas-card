<template>
  <article>
    <Navigation />

    <main class="main">
      <nuxt />
    </main>

    <Bottom />
  </article>
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
