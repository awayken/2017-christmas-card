<template>
  <section class="container">
    <story v-if="$store.state.readingLevel === 'old'" title="Landing on Skoor">
      <p>"We'll just make one tiny pit stop," Dad said as he began the Obisidian's landing sequence. They were orbitting around a bright green planet that shimmered in the light of its sun.</p>
      <p>"Where are we?" asked Kiddo. He unclipped his harness and hopped out of his seat. He floated to the nearest spaceship porthole.</p>
      <p>"It's a tourist trap," muttered Mom as she keyed in coordinates and checked safety lights.</p>
      <p>"It's a <em>famous</em> tourist trap known as Skoor, The Maze Planet. I've always wanted to come here."</p>
      <p>"What a coincidence that you need a pit stop right now."</p>
      <p>Sweets looked up from her notepad to see what the fuss was about. The planet was beautiful, wrapped with ribbons in a dozen shades of green. She flipped to a blank page in her notebook and began to furiously sketch and color the vista floating before them.</p>
      <p>"It's so gorgeous!" she squealed.</p>
      <p>"Better sketch quickly, sweetie," Dad said. "We begin atmosphere landing procedure in ten minutes."</p>
      <p>Just then, the telecommunicator crackled to life. "Welcome to Skoor, New Visitor! You are the three millioneth, four hundred and fifty-sixth, seven hundred and eighty-nineth visitor today! You and every humanoid aboard have won a free entry to the Maze Competition taking place right now! Can you escape the maze planet? You'll soon find out!"<p>
      <p>Dad and Kiddo and Sweets all turned to each other with big, beaming smiles. Mom shook her head and tapped some keys on the dashboard console. The ship began its descent.</p>

      <Chooser title="Choose Your Path">
        <nav slot="choices">
          <nuxt-link to="/landing-on-skoor" class="chooser__choice">
            <span class="chooser__choice-target">Continue to the Maze Planet</span>
          </nuxt-link>
        </nav>
      </Chooser>
    </story>

    <story v-if="$store.state.readingLevel === 'young'" title="Landing on Skoor">
      <p>Kiddo and Sweets are space explorers. They visit new planets with Mom and Dad. They love to explore.</p>
      <p>They are going to visit The Maze Planet. It is called Skoor. It looks like a big ball wrapped with green ribbons.</p>
      <p>The people who live on the Maze Planet say that Kiddo and Sweets have won a prize. They get to explore the giant maze.</p>
      <p>Dad and Kiddo and Sweets are excited to go to the Maze Planet.</p>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="story__choices">
          <nuxt-link to="/landing-on-skoor" class="chooser__choice">
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
