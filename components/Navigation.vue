<template>
  <nav>
    <div class="container">
      <button class="back" @click.prevent="goHome()" v-if="homeButton">Home</button>
      <button class="back" @click.prevent="goBack()" v-else>Back</button>

      <ReadingLevelToggle :currentLevel="$store.state.readingLevel" :readingLevels="$store.state.readingLevels" />
    </div>
  </nav>
</template>

<script>
  import ReadingLevelToggle from '~/components/ReadingLevelToggle.vue'

  export default {
    props: ['homeButton'],
    methods: {
      goBack () {
        window.history.length > 1
          ? this.$router.go(-1)
          : this.goHome()
      },
      goHome () {
        this.$router.push('/')
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
    left: 0;
    line-height: 1.5;
    padding: .5em 0;
    position: fixed;
    right: 0;
    top: 0;
  }

  .container {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .back::before {
    content: "\2190 ";
    display: inline;
  }
</style>

