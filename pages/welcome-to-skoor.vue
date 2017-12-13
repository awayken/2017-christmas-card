<template>
  <section class="container">
    <story v-if="$store.state.readingLevel === 'old'" title="Welcome to Skoor">
      <p>"Welcome to Skoor!" announces a spherical alien with bright green scales and bleached blond mullet. "I'm the President of Skoor, the planet and the civil designation, and I want to- Oh, dear Skoor! What is that??" President Skoor XIII points right at you, Fruckles, as he covers his mouth-like facial depression with his other tentacle. "I said free admittance for any <em>humanoid</em>. What is that thing?"</p>
      <p>"This thing is Fruckles, and Fruckles comes with us no matter where we go," says Dad, picking you up in his arms. "We love Fruckles!"</p>
      <p>"Yeah!" shout Kiddo &amp; Sweets.</p>
      <p>"Um, sure," mutters Mom.</p>
      <p>"Well, you are all about to embark on the adventure of a lifetime. Fruckles will have to choose which group to go with"</p>
      <p>"Why will-"</p>
      <p>The ground beneath you begins to rumble and shake. President Skoor grabs you and rolls away and onto a platform. The planet throws up giant walls of stone that separate Mom and Kiddo from Dad and Sweets and form an elborate labyrinth around them. The platform rises into the air with the granite walls. You and the President can look down upon the splintered family.</p>
      <p>"Choose your group, Fruckles. And let the Maze begin!"</p>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/mom-and-kiddo" class="chooser__choice">
            <span class="chooser__choice-target">Go with Mom and Kiddo</span>
          </nuxt-link>
          <nuxt-link to="/dad-and-sweets" class="chooser__choice">
            <span class="chooser__choice-target">Go with Dad and Sweets</span>
          </nuxt-link>
        </nav>
      </Chooser>
    </story>

    <story v-if="$store.state.readingLevel === 'young'" title="Welcome to Skoor">
      <p>President Skoor welcomes everyone to the planet called Skoor. He says that Kiddo and Sweets will have a great adventure.</p>
      <p>The ground rumbles and shakes. President Skoor grabs you. Really tall walls come out of the ground. Kiddo and Sweets are now in a giant maze. The walls separated them.</p>
      <p>President Skoor tells you to choose who to follow. Will you go with Kiddo or Sweets?</p>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/mom-and-kiddo" class="chooser__choice">
            <span class="chooser__choice-target">Go with Kiddo</span>
          </nuxt-link>
          <nuxt-link to="/dad-and-sweets" class="chooser__choice">
            <span class="chooser__choice-target">Go with Sweets</span>
          </nuxt-link>
        </nav>
      </Chooser>
    </story>
  </section>
</template>

<script>
  import Story from '~/components/Story.vue'
  import Chooser from '~/components/Chooser.vue'

  export default {
    components: {
      Story,
      Chooser
    }
  }
</script>

<style scoped>
  /* Special page styling */
</style>
