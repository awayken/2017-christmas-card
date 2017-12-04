<template>
  <nav class="container">
    <a href="/" class="back">Back</a>
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

