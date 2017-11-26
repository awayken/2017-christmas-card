<template>
  <article class="story">
    <h1 class="story__title">{{ title }}</h1>

    <slot></slot>

    <div class="story__choices">
      <slot name="choices">
        <p>You've made some bad choices in your life. Here's your chance to <a href="/">start over</a> and try again.</p>
      </slot>
    </div>
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
    font-size: 1.5rem;
    text-transform: uppercase;
  }

  .story__choices {
    display: flex;
    justify-content: center;
  }
</style>
