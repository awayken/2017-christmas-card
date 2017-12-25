<template>
  <section class="container">
    <story title="A Bearly Difficult Riddle">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You clamor across the burning sands to the gallant green horse. It neighs majestically and gallops across the dunes. The sand gives way to grassy knolls and hills and bursts of rock. The steed leaps gracefully over the rocks with increasing speed.</p>
        <p>Ahead, you can see great metal gates. Beyond the gates you see crowds of people waiting for your arrival. Your heart thrills at the prospect of being done with the maze. Suddenly, the horse stops galloping. It rears back, and you and Dad and Sweets fall out of the saddle. You land on the soft grass and watch the horse turn and race back the way you'd just come.</p>
        <p>You smell something dangerous. You hear a mighty roar, and a giant green bear is suddenly upon you two. He holds a spear and jabs it at you.</p>
        <p>"You cannot pass until you answer my riddle!" growls the bear. You and Dad and Sweets scramble to your feet. The bear swings the spear around, and you worry that he is about to attack you. You dive in front of Sweets, but the bear is only handing the spear to Sweets.</p>
        <p>"I've chosen you," he says to Sweets. "You must answer my riddle." Sweets shrugs and takes the spear. "Draw the number five!"</p>
        <p>Sweets thinks to herself for a minute. "This will be easy. I learned my letters and numbers in Pre-K this year." She uses the sharp end of the spear to carve a numeral "5" into the grass. Good job, Sweets! She hands the spear back to the bear who considers the marking. At last he nods and steps aside.</p>
        <p>"You may pass," he says, and the gates behind him open up. With the path open, you spring ahead. You know the finish line is close, and you can't wait to be done.</p>
      </div>
      <div v-else>
        <p>You get on the green horse. The green horse takes you out of the desert. Now the ground has grass and rocks on it.</p>
        <p>You see metal gates that are blocking the end. The horse knocks you off. The horses is scared of a bear. The bear has a spear.</p>
        <p>The bear wants Sweets to answer his question. He wants her to draw the number five. She uses his spear to draw a five. Good job, Sweets!</p>
        <p>The bear opens the gates so you can leave. You are almost done with the maze!</p>
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
