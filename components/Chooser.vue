<template>
  <div class="chooser">
      <h2 class="chooser__title pulp">{{ title }}</h2>

      <slot></slot>

      <slot name="choices">
        <p>You've made some bad choices in your life. Here's your chance to <a href="/">start over</a> and try again.</p>
      </slot>
    </div>
</template>

<script>
  export default {
    props: ['title']
  }
</script>

<style>
  .chooser {
    border-top: 1px dashed #fa6c22;
    margin-top: 2rem;
    padding-top: 2rem;
  }

  .chooser__subtitle {
    font-size: 1.8rem;
    margin: 0 0 1rem 0;
  }

  .chooser__choices {
    display: flex;
    justify-content: space-around;
  }

  .chooser__choice {
    border: 1px solid blue;
  }
</style>
