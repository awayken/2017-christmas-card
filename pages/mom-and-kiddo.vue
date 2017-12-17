<template>
  <section class="container">
    <story v-if="$store.state.readingLevel === 'old'" title="Mom and Kiddo">
      <p>You look back and forth between your two best friends: Kiddo and Sweets. It's a monstrous choice you're faced with, but you can hear President Skoor begin to mutter about leaving you on the ship, so you have to act. You leap from the stone platform and land next to Mom and Kiddo. Kiddo runs over and gives you a hug.</p>
      <p>"We're going to have a great adventure, Fruckles!"</p>
      <p>"Let's get moving, Kiddo," Mom says. "The sooner we finish this maze, the sooner we can get off this strange planet."</p>
      <p>You and mom and Kiddo begin down the stone path laid out for you. It gradually curves to the right, taking the three of you further and further away from Dad and Sweets. On either side of the path are the thick trees of a forest, but it soon starts to thin and open up. The rock walls begin to reduce, too, and you eventually come to flat, stony vista framed by a brilliant green sky.</p>
      <p>"Doesn't seem like much of a maze," Mom says as she looks around. Any trace of the former stone walls was gone. You jog ahead of Mom and Kiddo to scout the area. You have great eyesight and sense of smell.</p>
      <p>You notice something strange as you trot ahead. The horizon is getting closer and closer. Then it's right there. You screech to a halt and peer over the side of a huge vertical cliff.</p>
      <p>"Careful, Fruckles!" Kiddo calls out. He jogs over to you and gives you a reassuring hug.</p>
      <p>Mom takes a quick glance over the cliff. "That is definitely a long fall. Guess we have to head back."</p>
      <p>"No, we don't! Look!" Kiddo points off to the right. There is a single stone bridge a ways off. It looks thin and long and dangerous. At the far end of the bridge, you can see another cliff.</p>
      <p>"I think we should head back," says Mom. "This whole thing is a silly waste of time. If we head back, we can talk to the president and get off this planet immediately."</p>
      <p>"Or we can take the bridge and see what's over there," says Kiddo. "If we make it out of the maze, we win the grand prize!"</p>

      <Chooser title="Choose Your Path">
        <p>Mom and Kiddo both look at you, Fruckles. Which path will you choose?</p>

        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/mom-and-kiddo-turn-around" class="chooser__choice chooser__choice-target">
            Turn Around
          </nuxt-link>
          <nuxt-link to="/mom-and-kiddo-bridge" class="chooser__choice chooser__choice-target">
            Cross the Bridge
          </nuxt-link>
        </nav>
      </Chooser>
    </story>

    <story v-if="$store.state.readingLevel === 'young'" title="Mom and Kiddo">
      <p>You choose Mom and Kiddo. Kiddo gives you a big hug.</p>
      <p>"We're going to have a great adventure, Fruckles!"</p>
      <p>You and Kiddo and Mom walk on the path. At first, there are high walls around you and lots of trees. Then the wall and trees get lower and lower.</p>
      <p>You can see a wide, open space and the big, green sky. It is pretty.</p>
      <p>You run ahead to help lead the way. You find a big cliff. Kiddo finds a scary-looking bridge.</p>
      <p>Mom wants to go back. Kiddo wants to go on the bridge. What do you want to do?</p>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/mom-and-kiddo-turn-around" class="chooser__choice chooser__choice-target">
            Turn Around
          </nuxt-link>
          <nuxt-link to="/mom-and-kiddo-bridge" class="chooser__choice chooser__choice-target">
            Cross the Bridge
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
