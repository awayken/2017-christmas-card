<template>
  <section class="container">
    <story title="Desert Desserts">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You like the idea of being warm better than the idea of being cold, so you trot off to the left. The forest trees disappear and soon you're slinking into yellow sands of a desert. A clear path cuts through tall, billowing sand dunes on all sides of you. The sun is high and bright, and it makes you start to sweat. You start looking around for some relief.</p>
        <p>"Look! Water!" Sweets shouts. You and Dad and Sweets all see a sparkling pond lined with green grass and dotted with palm trees. You run over and lap at the water. It is cool and refreshing on your parched tongue. Dad and Sweets scoop great cupped handfuls of water into their mouths.</p>
        <p>"I could really go for some coconuts," Dad says. "But these trees all look pretty bare."</p>
        <p>"I see some down there," says Sweets. She points into the pond. Dad wades into the water, which is chest-high. He tries to catch the coconut with his feet, but he can't seem to get his aim right.</p>
        <p>"Oh, it's just no use," Dad says. "I can see it, but I can't get my foot on it."</p>
        <p>"I can help," says Sweets. "In swimming lessons this year, I learned how to duck my face in the water. I can put my face in the water and see where the coconut is."</p>
        <p>Sweets takes a deep breath and plunges her face below the surface. She uses a free hand to gesture. Dad moves his foot as she points, and finally gets his foot on the coconut in question. He kicks it up to the shore and out of the water. You bound over and use your sharp claws and teeth to crack the coconut open, and everyone enjoys a refreshing snack.</p>
        <p>As you eat, two creatures show up. One looks like a green horse, and one looks like a green bison. They both have saddles on them. "I bet those animals know the way out of this desert," says Dad. "We should pick one to ride our way out of here."</p>
      </div>
      <div v-else>
        <p>You want to be warm, so you go left. The path takes you into a desert. It is hot and bright. There are tall hills of sand called sand dunes.</p>
        <p>You are thirsty. Sweets finds a pond. You get a drink at the pond. Dad wants to eat a coconut. Sweets sees a coconut in the water, but Dad can't grab it.</p>
        <p>Sweets learned how to duck her head in swimming lessons. She can put her face in the water and tell Dad where to look. Dad finds the coconut. Good job, Sweets!</p>
        <p>Two animals show up. One is a green horse. One is a green bison. You can pick one and ride it. Which one will you ride?</p>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/bearly-difficult-riddle" class="chooser__choice chooser__choice-target">
            Ride the Green Horse
          </nuxt-link>
          <nuxt-link to="/letters-where-your-mouth-is" class="chooser__choice chooser__choice-target">
            Ride the Green Bison
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
