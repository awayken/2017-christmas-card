<template>
  <article class="story">
    <h1 class="story__title pulp">{{ title }}</h1>

    <slot></slot>
  </article>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style scoped>
  .story {
    padding: 1em;
  }

  .story__title {
    font-size: 2em;
    margin: 0 0 1rem 0;
  }
</style>
