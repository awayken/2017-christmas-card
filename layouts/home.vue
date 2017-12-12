<template>
  <article>
    <main class="main">
      <nuxt />
    </main>

    <Bottom />
  </article>
</template>

<script>
  import Bottom from '~/components/Bottom'

  export default {
    components: {
      Bottom
    }
  }
</script>
