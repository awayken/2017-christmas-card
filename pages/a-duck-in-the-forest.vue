<template>
  <section class="container">
    <story title="A Duck in the Forest">
      <figure class="pulpbox"><img class="pulpbox--image" src="~/assets/kiddo-grade.jpg"></figure>
      <div v-if="$store.state.readingLevel === 'old'">
        <p>As you enter the forest, the trees tower high above you, forming a thick canopy that blots out the sky. The calls and cries of strange animals fill the air around you but soon another sound begins to filter in.</p>
        <p>"What's that sound?" Kiddo asks. It sounds like birds flapping towards you. Lots of birds.</p>
        <p>Down the path, heading right towards you, fly a thick flock of dazzling and beautiful tropical birds. They fill the path, flying fast and furious. Mom and Kiddo scramble off the path to get out of their way. You close your eyes and duck. You can feel the breeze kicked up by the birds as they brush barely over your spotted fur. When the last bird is past, you open your eyes. Mom and Kiddo are nowhere to be seen.</p>
        <p>You chirp and spin around, but you don't see them anywhere. "Fruckles! Where are you?" Kiddo calls out. You chirp and coo at him. "I can hear you Fruckles! You have to take the right path to find us!"</p>
        <p>You run down the path, thinking they got ahead of you. Not far ahead, though, the path splits in two. A wooden sign stands at the fork in the road, with arrows directing the traveler one way or the other.</p>
        <p>"Fruckles, you need to take the path to the finish line," Kiddo tells you. "It says "Finish" on it. I learned how to read and spell a lot of words in First Grade this year. Finish is spelled: F-I-N-I-S-H. Do you see that word on the sign, Fruckles?"</p>
        <p>You chirp in reply. "Finish" is written next to the arrow pointing to the right. You run down that path certain that you will find Kiddo and Mom and the end of the maze, all at the same time.</p>
      </div>
      <div v-else>
        <p>In the forest, there are a lot of trees. The trees are very tall. You can hear lots of forest animals.</p>
        <p>You hear birds flying. A lot of birds are flying right at you. You duck and close your eyes until they fly away.</p>
        <p>When the birds are gone, you open your eyes. Mom and Kiddo are gone. You walk down the path to find them.</p>
        <p>You find a sign telling you where to go. You can hear Kiddo. Kiddo can spell FINISH. Good job, Kiddo! The sign tells you where the finish line is.</p>
        <p>You are almost done with the maze!</p>
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
