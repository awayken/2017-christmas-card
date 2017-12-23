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
    border-top: .25em dotted #fa6c22;
    margin-top: 1em;
    padding-top: 1em;
  }

  .chooser__subtitle {
    font-size: 1.8em;
    margin: 0 0 1rem 0;
  }

  .chooser__choices {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .chooser__choice {
    align-items: center;
    background: #fefdce;
    border-radius: .25em;
    box-shadow: 0 1px #fa6c22,
      -1px 2px #fa6c22,
      -2px 3px #fa6c22,
      -3px 4px #fa6c22;
    color: #0f0b0e;
    display: flex;
    margin: 5px 5px 10px 5px;
    max-width: calc(50% - 10px);
    padding: .25em;
    text-align: center;
    text-decoration: none;
  }

  .chooser__choice-target {
    display: block;
    text-decoration: underline;
  }
</style>
