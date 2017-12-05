<template>
  <nav class="container">
    <nuxt-link to="/" class="back">Back</nuxt-link>
    <a href="/">Start Over</a>
  </nav>
</template>

<style>
  nav {
    display: flex;
    justify-content: space-between;
  }

  .back::before {
    content: "< ";
    display: inline;
  }
</style>

