<template>
  <section class="container">
    <h1 class="pulp">Escape <small>from the</small> Maze Planet</h1>

    <p><span class="pulp">Welcome</span> to the 2017 Christmas Card!</p>

    <p>The Miles Rausch Family has completed another stellar year, and they're celebrating it with this text adventure story that you can play. Learn more about us and what we experienced in 2017, and try to escape the maze planet all at the same time!</p>

    <h2 class="pulp">Choose Your Reading Level</h2>

    <p>You are P. Ditty, a dat (half dog, half cat) creature that the Miles Rausch Family picked up on one of their space adventures. Are you young or old? Choosing the right P. Ditty will make the story easier to read.</p>

    <div class="story__choices">
      <nuxt-link to="/page1" class="story__choice" @click="setDat('old')">
        Old P. Ditty
      </nuxt-link>
      <nuxt-link to="/page1" class="story__choice" @click="setDat('young')">
        Young P. Ditty
      </nuxt-link>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      age: 'young'
    }
  },
  methods: {
    setDat (age) {
      console.log(age)
      this.age = age
    }
  }
}
</script>


<style scoped>
  h1 {
    display: block;
    font-size: 3rem;
    text-align: center;
  }

  h1 small {
    display: inline-block;
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: center;
    vertical-align: middle;
    width: 3em;
  }
</style>
