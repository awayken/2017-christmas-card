<template>
  <section class="container">
    <h1 class="pulp">Escape <small>from the</small> Maze Planet</h1>

    <p><span class="pulp">Welcome</span> to the 2017 Christmas Card!</p>

    <p>The Miles Rausch Family has completed another stellar year, and we're celebrating it with this text adventure story. Young or old, choose your own adventure with Kiddo &amp; Sweets. Learn more about our 2017 as you try to escape the maze planet, Skoor!</p>

    <Chooser title="Choose Your Reading Level">
      <p>You are the family pet, Fruckles (a half Shar Pei, half cheetah creature) that the Kiddo &amp; Sweets picked up on one of their many space adventures. Are you young or old? Choosing the right reading level will make the story easier to follow.</p>

      <nav slot="choices" class="chooser__choices">
        <nuxt-link to="/landing-on-skoor" class="chooser__choice">
          <span @click="$store.commit('setReadingLevel', 'old')">Old Fruckles</span>
        </nuxt-link>
        <nuxt-link to="/landing-on-skoor" class="chooser__choice">
          <span @click="$store.commit('setReadingLevel', 'young')">Young Fruckles</span>
        </nuxt-link>
      </nav>
    </Chooser>
  </section>
</template>

<script>
  import Chooser from '~/components/Chooser.vue'

  export default {
    components: {
      Chooser
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
