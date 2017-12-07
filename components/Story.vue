<template>
  <article class="story">
    <h1 class="story__title pulp">{{ title }}</h1>

    <slot></slot>

    <div class="story__choose">
      <h2 class="story__subtitle pulp">Choose Your Path</h2>

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
    font-size: 2rem;
    margin: 0 0 1rem 0;
  }

  .story__subtitle {
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
  }

  .story__choose {
    border-top: 1px dashed #fa6c22;
    margin-top: 2rem;
    padding-top: 2rem;
  }

  .story__choices {
    display: flex;
    justify-content: space-around;
  }
</style>
