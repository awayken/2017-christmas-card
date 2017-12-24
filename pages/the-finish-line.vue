<template>
  <section class="container">
    <story title="The Finish Line">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You're too excited to wait. You race ahead and dive through the green ribbon. It breaks, and the crowd erupts in cheers. You look around, and the whole family is together again: Mom, Dad, Kiddo and Sweets. You all look tired and elated to be finally done with the maze planet.</p>
        <p>"Congratulations!" shouts President Skoor. "You are truly a remarkable family to make it all out, and alive no less!"</p>
        <p>"Wait, what?" says Dad, but the President continues.</p>
        <p>"Since you have all completed the maze and made it to the finish line, you will all receive our grand prize. Bring it out!"</p>
        <p>Four green, muscular aliens come forward supporting a large box between them. The box is wrapped in dozens of green ribbons and topped with a bright green ribbon. They gently set the box on the ground and step away. President Skoor rolls over to the box and takes one end of the boy in his hand. He pulls, and the ribbons begin to feverishly unravel. They arc and slice through the air with a hiss. As the last ribbon untangles, the walls of the box fall away.</p>
        <p>"What is it?" asks Sweets.</p>
        <p>"There's nothing there," Kiddo whispers.</p>
        <p>President Skoor bends over and picks something small off the bottom of the box. He is beaming as he rolls over to the family and presents a small slip of paper to everyone but you. Dad's face is excited until he reads what's on the paper.</p>
        <p>"You have won the Grand Prize," Dad reads. "Free entry into The Maze Planet&hellip;"</p>
        <p>Mom and Dad exchange a look. Dad gives President Skoor a wooden smile. Mom doesn't even bother.</p>
        <p>"Is our ship ready?" she asks.</p>
        <p>President Skoor gestures to his right. The ship is waiting there, black and shiny and ready. "Of course! Contestants get free-"</p>
        <p>"Time to go. Who wants find an uncharted Ice Cream Planet?"</p>
        <p>You and Kiddo and Sweets cheer and chirp and run toward the ship. You hope the Ice Cream Planet has "Liver and Antelope" flavor. Mom and Dad begin the take-off procedure and soon Skoor is a green marble floating in the black of space once again. You're happy to escape The Maze Planet with your family, but you hope to never set foot on its green soil again.</p>
      </div>
      <div v-else>
        <p>You are too excited to wait. You run to the finish line. The crowd cheers for you. Everyone is there: Mom, Dad, Kiddo and Sweets. You all finished the maze.</p>
        <p>President Skoor has a big present for the family. It has many green ribbons on it. He opens it, but you cannot see what's inside. The present is small pieces of paper.</p>
        <p>Dad tells you what is on the paper. The paper says, "You have won the Grand Prize: Free entry into The Maze Planet." No one wants to come back to The Maze Planet. It was not very fun.</p>
        <p>Mom asks if you want to go to an Ice Cream Planet instead. You and Kiddo and Sweets cheer and chirp. You hope the Ice Cream Planet has "Liver and Antelope" flavor.</p>
        <p>Everyone gets on the space ship. You fly away from the planet. It looks like a green marble in space. You are happy that you escaped from The Maze Planet with your family. Good job, Fruckles!</p>
      </div>

      <Chooser title="...Or Is It?">
        <p>Not ready to leave? You can start over and choose different paths for a new adventure on The Maze Planet.</p>

        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/" class="chooser__choice chooser__choice-target">
            Play Again
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
    layout: 'deadend',
    components: {
      Story,
      Chooser
    }
  }
</script>

<style scoped>
  /* Special page styling */
</style>
