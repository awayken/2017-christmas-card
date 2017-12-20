<template>
  <footer class="container">
    <p>&copy; {{ year }} Miles &amp; Holli Rausch</p>
    <p>View the code on <a href="https://github.com/awayken/2017-christmas-card" target="_blank" rel="noopener">GitHub</a></p>
  </footer>
</template>

<script>
  export default {
    data: () => {
      return {
        year: new Date().getFullYear()
      }
    }
  }
</script>

<style scoped>
  footer {
    font-size: .85em;
    margin-top: 2rem;
    padding-bottom: .5em;
    padding-top: .5em;
    text-align: center;
  }
</style>
