<template>
  <button class="toggle" @click.prevent="$store.commit('setReadingLevel', otherLevel)">Switch to {{ otherLevelText }}</button>
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

<style>
</style>
