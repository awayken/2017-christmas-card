<template>
  <section class="container">
    <story title="One Tiny Pit Stop">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>"We'll just make one tiny pit stop," Dad says as he begins the Obisidian's landing sequence. We were orbitting around a bright green planet that was shimmering in the light of its sun.</p>
        <p>"Where are we?" asks Kiddo. He unclips his harness and hops out of his seat. He floats to the nearest spaceship porthole.</p>
        <p>"It's a tourist trap," mutters Mom as she keys in coordinates and checks the safety lights.</p>
        <p>"It's a <em>famous</em> tourist trap known as Skoor, the Maze Planet. And I've always wanted to come here."</p>
        <p>"What a coincidence that you need a pit stop right as we enter Skoor's orbit&hellip;"</p>
        <p>Sweets looks up from her notepad to see what the fuss is about. The planet is beautiful, wrapped with ribbons in a dozen shades of green. She flips to a blank page in her notebook and begins to furiously sketch and color the vista floating before us.</p>
        <p>"It's so gorgeous!" she squeals.</p>
        <p>"Better sketch quickly, sweetie," Dad says. "We begin atmosphere landing procedure in ten minutes."</p>
        <p>The telecommunicator crackles to life. "Welcome to Skoor, New Visitor! You are the three millioneth, four hundred and fifty-sixth thousandeth, seven hundred and eighty-nineth visitor today! You and every humanoid aboard have won a free entry to the Maze Competition taking place right now! Can you escape the maze planet? You'll soon find out!"<p>
        <p>Dad and Kiddo and Sweets all turn to each other with big, beaming smiles. Mom shakes her head and taps some keys on the dashboard console. The ship begins its descent.</p>
      </div>
      <div v-else>
        <p>Kiddo and Sweets are space explorers. They visit new planets with Mom and Dad. They love to explore.</p>
        <p>They are going to visit the Maze Planet. It is called Skoor. It looks like a big ball wrapped with green ribbons.</p>
        <p>The people who live on the Maze Planet say that Kiddo and Sweets have won a prize. They get to explore the giant maze.</p>
        <p>Dad and Kiddo and Sweets are excited to go to the Maze Planet. Mom is not.</p>
      </div>

      <Chooser title="Choose a Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/welcome-to-skoor" class="chooser__choice">
            <span class="chooser__choice-target">Continue to the Maze Planet</span>
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
