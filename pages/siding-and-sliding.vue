<template>
  <section class="container">
    <story title="Siding and Sliding">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You bound across the snow and leap onto the giant green eagle's back. Dad and Sweets are close behind. The eagle flaps its mighty wings and lifts off the ground. It flies straight up and above the clouds. The wind is fierce and cold, and below is a floor of dark grey clouds. The eagle banks to the left, and you see why. Ahead of you is the jagged, brown top of an ancient tree poking a hole through the cloud cover.</p>
        <p>The eagle lands on one of the branches. It shimmies, and the three of you fall out of the saddle and onto another one of the branches. Then the eagle flies away.</p>
        <p>"Now what do we do?" Dad asks. He and Sweets find ways to be upright in the crook of the old tree. You see three slides that poke out of the clouds right next to the tree. You can't see where they lead, but they have shapes on the sides of them. One shape has four sides, one has five sides and one has six sides.</p>
        <p>Sweets notices the shapes, too. She notices something else, too. On the tree is written a word. Sweets points to the word. "Dad, what does that says?"</p>
        <p>"It says "hexagon"," says Dad.</p>
        <p>"Oh! I know what a hexagon is. I learned about shapes this year in Pre-K. A hexagon has six sides. We should go down the slide that has the shape with six sides."</p>
        <p>"Works for me," Dad says. Sweet is right about hexagons. Good job, Sweets! "After you, Fruckles?"</p>
        <p>You jump off the tree branch and into the mouth of the slide. You rocket downward, snaking left and right and looping over yourself until you finally spill out of the end and onto a stone path. You shake off the dust and look down the path. You can hear a crowd cheering. You spring ahead. You know the finish line is close, and you can't wait to be done.</p>
      </div>
      <div v-else>
        <p>You and Dad and Sweets get on the giant green eagle. It flies high in the sky. It takes you to a very tall tree.</p>
        <p>Next to the tree are three slides. Each slide has a shape on it. The tree has a word written on it.</p>
        <p>Dad reads the word. It says hexagon. Sweets finds the hexagon shape. Hexagons have six sides. Great job, Sweets!</p>
        <p>You jump into the slide with a hexagon on it. It is a fast and long slide. When it stops, you can see the end. You are almost done with the maze!</p>
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
