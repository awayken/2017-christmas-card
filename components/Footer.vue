<template>
  <footer>
    <small>&copy; {{ year }} Miles &amp; Holli Rausch</small>
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

<style>
  footer {
    margin-top: 2rem;
    text-align: center;
  }
</style>
