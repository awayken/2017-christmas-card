<template>
  <section class="container">
    <story title="Spell You Later">
      <figure class="pulpbox"><img class="pulpbox--image" src="~/assets/kiddo-grade.jpg"></figure>
      <div v-if="$store.state.readingLevel === 'old'">
        <p>As you enter the forest, the trees tower high above you, forming a thick canopy that blots out the sky. The calls and cries of strange animals fill the air around you but soon another sound begins to filter in.</p>
        <p>"What's that sound?" Kiddo asks. It sounds like hooting and swooping. A green ape swings in from the right on a vine, scoops mom up and disappears.</p>
        <p>"Hey!" Mom shouts, but the ape is gone again, into the forest, before you or Kiddo can stop her. Two more apes swing in on vines and drop to the group right in front of you. They hold up a hand to stop you.</p>
        <p>"Halt, alien travelers! We are the Ape Brigade. You are nearing the end of the maze, and we are here to make sure you are worthy of the grand prize. You must answer our challenge without a grown-up's help."</p>
        <p>You are nervous. You slink behind Kiddo's legs. The green apes are much bigger and stronger than you. You start to think that turning around might be a good option at this point.</p>
        <p>"We are worthy," Kiddo says. "What is your challenge?"</p>
        <p>"You must spell CAR," says the ape.</p>
        <p>Kiddo laughs, "That's easy! C-A-R." Kiddo starts down the path, but the apes don't move.</p>
        <p>"Not so fast! You don't think that's it, do you? Now spell DOG."</p>
        <p>"These will all be easy. I learned how to spell a lot of words in First Grade. D-O-G is how you spell dog. Now let-"</p>
        <p>"Halt! Now spell CAT."</p>
        <p>"C-A-T."</p>
        <p>"Spell BOTH."</p>
        <p>"B-O-T-H. Please, let-"</p>
        <p>"Okay. Now spell-"</p>
        <p>You chirp and spin around. Kiddo bends down, and you chirp a message into his ear. He nods and smiles at you. He likes your idea.</p>
        <p>"How about I pick a word for you to spell. If I can spell it, but you can't, then you will let us go. And you'll bring Mom back."</p>
        <p>The two green apes look at each other. They talk in low words to each other before turning back to you and Kiddo. They nod at you.</p>
        <p>"Okay. I want you guys to spell FINISH."</p>
        <p>The first ape says, "F-I-S-H." The second ape says, "F-I-N-C-H." Kiddo smiles and shakes his head. "F-I-N-I-S-H," he says triumphantly. Good job, Kiddo! The first green ape swoops back into the path and drops Mom in front of you. Then all three apes run into the forest, grab vines and swing off.</p>
        <p>With the path open, you spring ahead. You know the finish line is close, and you can't wait to be done.</p>
      </div>
      <div v-else>
        <p>In the forest, there are a lot of trees. The trees are very tall. You can hear lots of forest animals.</p>
        <p>A big green ape swings on a vine. It grabs Mom. Two more apes land on the path and stop you.</p>
        <p>They want Kiddo to spell some words before you can keep going. They want Kiddo to spell CAR and DOG and CAT. Kiddo can spell all those words. Good job, Kiddo!</p>
        <p>You tell Kiddo that he should ask the apes to spell a word. He asks them to spell FINISH. They do not know how to spell that word. Kiddo can spell FINISH.</p>
        <p>The apes bring Mom back and leave the path so you can finish. You are almost done with the maze!</p>
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
