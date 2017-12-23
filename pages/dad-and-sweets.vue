<template>
  <section class="container">
    <story title="Dad and Sweets">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You look back and forth between your two best friends: Kiddo and Sweets. It's a monstrous choice you're faced with, but you can hear President Skoor begin to mutter about leaving you on the ship, so you have to act. You leap from the stone platform and land next to Dad and Sweets. Sweets runs over and gives you a hug.</p>
        <p>"We're going to have a great adventure, Fruckles!"</p>
        <p>"It looks like we have only one option," Dad says, pointing down the path. "We'll have to go into the forest."</p>
        <p>You and Dad and Sweets began a slow journey into the forest growing up around you. The path you're on gradually pulls to your left, moving the three of you further and further from the rocky division. The trees tower high above you, forming a thick canopy that blots out the sky. The calls and cries of strange animals fills the air around you but soon another sound begins to filter in.</p>
        <p>"What's that sound?" Sweets asks.</p>
        <p>"I hear water!" Dad says. "We must be near a stream."</p>
        <p>The sound grows louder and clearer and soon you find yourselves on the banks of a huge river. The water is as green as the leaves are, and the water flows slowly.</p>
        <p>"I'll see how deep it is," Dad says. He gets down on all fours on the shore and reaches a hand into the current. "Hmm... Seems pretty-"</p>
        <p>Dad slips off the shore and into the water. He is gone but just for a moment. Then he bobs back up and scrambles onto land.</p>
        <p>"Okay. Way too deep. We should head back. I thought this would be fun, but we can really get hurt out here."</p>
        <p>"No, Dad! We can win! We just need to keep going!" says Sweets. "There must be a way across."</p>
      </div>
      <div v-else>
        <p>You choose Dad and Sweets. Sweets gives you a big hug.</p>
        <p>"We're going to have a great adventure, Fruckles!" says Sweets.</p>
        <p>You and Dad and Sweets walk on the path. There are a lot of trees. You are in a forest.</p>
        <p>You can hear lots of forest animals. You can also hear water.</p>
        <p>You find a big river. Dad thinks it is deep. He falls into the river! He says it is too big and deep.</p>
        <p>Dad wants to go back. Sweets wants to cross the river. What do you want to do?</p>
      </div>

      <Chooser title="Choose Your Path">
        <p v-if="$store.state.readingLevel === 'old'">Sweets turns to you. "What do you think Fruckles?"</p>

        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/turn-around" class="chooser__choice chooser__choice-target">
            Turn Around
          </nuxt-link>
          <nuxt-link to="/cross-the-river" class="chooser__choice chooser__choice-target">
            Cross the River
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
