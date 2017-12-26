<template>
  <section class="container">
    <story title="Hop, Skip and Jump">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You follow Sweets to the spike-lined ledge. It looks a little wider than you thought, but the spikes look taller and sharper. You look at Sweets, and you can see that she's trying to figure out how to make it across.</p>
        <p>"How are we going to get across?" Dad asks. "There are parts that we can walk along and parts we have to jump over."</p>
        <p>"I know!" says Sweets. "When I took dance lessons this year, I learned how to skip. Skipping is the perfect way to jump over the spikes."</p>
        <p>"Sounds contrived," says Dad, "but we have literally no other options. I guess I'll let a little girl skip across this dangerous ledge."</p>
        <p>You hop onto the ledge to lead the way. Sweets is right. Skipping is the perfect way to run across the ledge without getting stabbed by the spikes. In no time, all three of you are on the far shore of the river. Good job, Sweets!</p>
        <p>"Great plan, Sweets," Dad says. "We made it across without getting spiked. Now we have to decide where to go next."</p>
        <p>Down the path is a giant statue. It's a statue of President Skoor in all his round glory standing in front of a rocky cliff face. The path breaks into two and wraps around him and the rocky cliff beyond. The air coming down the left path seems hot and dry. The air coming from the right seems cold and dry. Which path should you go down?</p>
      </div>
      <div v-else>
        <p>You are scared to go across the spikes. You trust Sweets. She learned how to skip in Dance this year. She shows you how to skip across.</p>
        <p>It is fun to skip. Everyone skips across. It works! Good job, Sweets!</p>
        <p>On the other side of the river is a big statue of President Skoor. There are two paths around the statue. The left one feels hot. The right one feels cold.</p>
        <p>Which way do you want to go?</p>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/desert-desserts" class="chooser__choice chooser__choice-target">
            Go to the Left
          </nuxt-link>
          <nuxt-link to="/ice-ice-baby" class="chooser__choice chooser__choice-target">
            Go to the Right
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
