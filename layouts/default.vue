<template>
  <article>
    <Navigation />

    <nuxt />

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
