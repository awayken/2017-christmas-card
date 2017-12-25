<template>
  <section class="container">
    <story title="Heading Through">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You take the path to the left. It heads down, and the darkness gets thicker and thicker. Thankfully, you can see in almost complete darkness. When it gets too dark for him to see, Kiddo puts his hand on your back. Mom puts her hand on his shoulder, and you lead everyone through the cave. At first, the cave is so quiet that all you can hear are your own feet. But another sound starts to pick up.</p>
        <p>"Do you hear that?" Kiddo asks.</p>
        <p>"Sounds like water," Mom says. "Maybe it's a river. I hope it's not deep."</p>
        <p>But the sound isn't coming from inside the cave. The path begins to rise, and you can see light ahead. The path continues its climb and leads you to another doorway. Cascading down the opening is a torrent of water.</p>
        <p>"It's a waterfall," Mom says. She looks at Kiddo nervously. "We'll have to go through the water to get out, Kiddo."</p>
        <p>"That's okay, Mom. When we had private swimming lessons this year, I learned that the water isn't so scary. Getting my head and face wet is no problem. Watch!"</p>
        <p>Kiddo takes his hand off your shoulder and marches straight through the waterfall. He disappears through the spray.</p>
        <p>"See? No problem! It's kinda fun!"</p>
        <p>You and Mom take your turns passing under the chilly spray. On the other side, you see a huge wall of green. It's a great forest with a green path leading through it. There's also a rocky path to your right that leads around the mountain you just passed through.</p>
      </div>
      <div v-else>
        <p>You take the path to the left. The path is very dark. You can see in the dark. You lead the way.</p>
        <p>You hear the sound of water. Kiddo hears it, too. There is a waterfall at the end of the path.</p>
        <p>Kiddo had swimming lessons this year. Kiddo is not afraid to walk under the water. Good job, Kiddo! You and Mom walk under the water, too.</p>
        <p>After the waterfall, there are two paths. One path goes into a forest. One path goes around the mountain.</p>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/a-duck-in-the-forest" class="chooser__choice chooser__choice-target">
            Through the Forest
          </nuxt-link>
          <nuxt-link to="/math-mountain" class="chooser__choice chooser__choice-target">
            Around the Mountain
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
