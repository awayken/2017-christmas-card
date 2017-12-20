<template>
  <nav>
    <div class="container">
      <a href="#back" @click.prevent="goBack()" class="back">Back</a>
      <ReadingLevelToggle :currentLevel="$store.state.readingLevel" :readingLevels="$store.state.readingLevels" />
    </div>
  </nav>
</template>

<script>
  import ReadingLevelToggle from '~/components/ReadingLevelToggle.vue'

  export default {
    methods: {
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.$router.push('/')
      }
    },
    components: {
      ReadingLevelToggle
    }
  }
</script>

<style scoped>
  nav {
    background: rgba(39, 111, 63, 0.75);
    line-height: 1.5;
    padding: .5em 0;
  }

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .back::before {
    content: "< ";
    display: inline;
  }
</style>

