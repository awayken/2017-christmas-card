<template>
  <section class="container">
    <story title="Math Mountain">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>The path around the mountain is steep and harrowing. A chilly wind whips around you as you edge along the precipice. Kiddo and Mom are close behind and look no more comfortable. The path corkscrews up the mountain, and when you look up, you notice that there is less and less mountain above you. It seems like you're heading for the peak, but before you reach the zenith, you come to a rocky platform strewn about with large rocks.</p>
        <p>On the platform is a large basket, big enough for you and Mom and Kiddo to climb comfortably into. The basket is attached to a strong cable that is mounted into the mountain on one end. The other end arcs down into the forest and disappears into the canopy.</p>
        <p>"What's that?" Kiddo asks. You notice that he's pointing at a metal pail resting next to the basket. Kiddo goes over to the pail and finds something inside. It's a piece of paper with some numbers and symbols on it.</p>
        <p>"Two plus three," he reads. "Oh! I know that! I've been learning lots of math this year in First Grade. The answer is five!"</p>
        <p>You and Kiddo gather up five rocks. The two of you carry rocks over to the pail and drop them in. When Kiddo drops in the last rock, the basket suddenly tips up.</p>
        <p>"Hurry!" Mom shouts. "Get in!"</p>
        <p>You and Kiddo jump into the basket with Mom. The basket tips more and more as a stone finger pushes up out of the ground under it.</p>
        <p>"Hold on!"</p>
        <p>The basket tips off the cliff. It jerks against the cable and begins to slide down into the forest. It goes faster and faster. The forest becomes a blur around you. The three of you duck down to prevent taking a mouthful of leaves. You can see the basket getting closer and closer to the ground. Suddenly, it stops and tips fully over. You all spill out and onto the forest floor. You shake the journey off your spotted fur. You look around, but there's only one way to go. Straight ahead of you, just beyond the forest, is a crowd of cheering people and a green and light green banner waiting for you to break it.</p>
      </div>
      <div v-else>
        <p>It is hard to walk around the mountain. The path is not very wide. You find a big basket connected to a rope. You and Mom and Kiddo can all fit in the basket.</p>
        <p>Next to the basket is a bucket. The bucket has a math problem on it. What does 2 + 3 equal? Kiddo knows the answer. The answer is 5. Good job, Kiddo!</p>
        <p>You and Kiddo find five rocks and put them in the bucket. The basket starts to tip over. Everyone gets into the basket.</p>
        <p>The basket slides down the rope. It goes very fast. It goes into the forest. You duck so the leaves don't hit you in the face. When the basket stops, you fall out. You can see the end of the maze!</p>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/the-finish-line" class="chooser__choice chooser__choice-target">
            The Finish Line
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
