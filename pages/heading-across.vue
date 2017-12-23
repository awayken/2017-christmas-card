<template>
  <section class="container">
    <story title="Heading Across">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You take the path to the right. It heads up and light echos and bounces off the walls and ceiling of the path, although you can't tell where the light is coming from. There is a breeze coming at you from the front, and you can smell the salty spray it carries along.</p>
        <p>"We must be near the ocean," Mom says.</p>
        <p>"I can smell it," says Kiddo. "I bet you smelled it a long time ago," he says to you. He's right. You have a great sense of smell and vision.</p>
        <p>The path continues to rise but when it levels off, you see why. The cave path is flooded ahead. The water comes pouring out of a break in the cave wall to your right, cuts a wide and flat river across your path and disappears through a crack at the base of the left wall. Somewhere off that direction you can hear the crashing of a waterfall.</p>
        <p>"That water looks deep, Kiddo," Mom says. "Maybe we should turn around. You're still a little nervous around water."</p>
        <p>"It's okay, Mom. When we had private swimming lessons this year, I learned that the water isn't so scary. I can do the doggie paddle now. Watch!"</p>
        <p>Kiddo jumps into the water and paddles his way across. He climbs up onto the far shore and takes a bow.</p>
        <p>"See? No problem! It's kinda fun!"</p>
        <p>You and Mom take your turns swimming across. On the other side, you can see the end of the cave. It opens onto a high platform, and beyond you see a huge wall of green. It's a great forest with a green path leading through it. There's also a rocky path to your left that leads around the mountain you just passed through.</p>
      </div>
      <div v-else>
        <p>You take the path to the right. It is bright. You can hear and smell water.</p>
        <p>There is a big river in the cave. You have to go across the river.</p>
        <p>Kiddo had swimming lessons this year. Kiddo is not afraid to swim through the water. You and Mom swim across the water, too.</p>
        <p>After the river, there are two paths. One path goes around the mountain. One path goes into a forest.</p>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/" class="chooser__choice chooser__choice-target">
            Around the Mountain
          </nuxt-link>
          <nuxt-link to="/" class="chooser__choice chooser__choice-target">
            Through the Forest
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
