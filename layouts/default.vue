<template>
  <article>
    <Navigation />

    <main class="main">
      <nuxt />
    </main>

    <Footer />
  </article>
</template>

<script>
  import Navigation from '~/components/Navigation'
  import Footer from '~/components/Footer'

  export default {
    components: {
      Navigation,
      Footer
    }
  }
</script>
