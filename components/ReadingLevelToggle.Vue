<template>
  <button class="toggle" :title="`Switch to ${otherLevelText}`" @click.prevent="$store.commit('setReadingLevel', otherLevel)">{{ otherLevelText }}</button>
</template>

<script>
  export default {
    props: ['currentLevel', 'readingLevels'],
    computed: {
      otherLevel: function () {
        for (let level in this.readingLevels) {
          if (level !== this.currentLevel) {
            return level
          }
        }
      },
      otherLevelText: function () {
        return this.readingLevels[this.otherLevel]
      }
    }
  }
</script>

<style scoped>
  .toggle::after {
    content: " \2194";
    display: inline;
  }
</style>
