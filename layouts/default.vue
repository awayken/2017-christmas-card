<template>
  <article>
    <p>Current P. Ditty: {{ $store.state.datAge }}</p>

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
