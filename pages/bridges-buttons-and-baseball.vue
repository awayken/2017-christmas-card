<template>
  <section class="container">
    <story title="Bridges, Buttons and Baseball">
      <figure class="pulpbox"><img class="pulpbox--image" src="~/assets/kiddo-baseball.jpg"></figure>
      <div v-if="$store.state.readingLevel === 'old'">
        <p>The bridge doesn't look so scary and narrow, so you march bravely to it. Kiddo trots alongside you, but you both pause when you reach the first step. The bridge is made of a smooth stone, like jade, and it's not much wider than your whole body.</p>
        <p>"Um, you first," Kiddo says.</p>
        <p>You take some careful steps onto the walkway. It feels solid and not too slippery, and before you know it all three of you are making good progress across the bridge.</p>
        <p>At the far end of the bridge, you can see a cliff face and chiseled into it is a doorway. You pick up the pace, and Kiddo follows closely behind. When you get to the door, Kiddo bangs on it, and you can both hear an echo on the other side.</p>
        <p>"I wonder how we get through," Mom says. She looks around for a key or a handle.</p>
        <p>"Hey, what's that?" Kiddo points to a spot above the door. It's a small stone button standing out of rock. It has an "X" on it.</p>
        <p>"It looks like a button," says Mom. "But how do we push it?"</p>
        <p>"I know!" Kiddo says. "I started playing baseball this year. I bet I can hit that button if I had a ball."</p>
        <p>You know just what to do. You use your keen vision and sense of smell to search out the perfect fist-sized rock to use as a ball. Kiddo lines up his feet and throws the ball. <em>Crack!</em> It smashes against the button and shatters into pieces. The doorway before you opens up to reveal a dark cave.</p>
        <p>"Awesome throw, Kiddo!" Mom says. Kiddo cheers, and you jump and chirp with excitement. Mom leads the way into the cave, and you discover a fork in the road.</p>
      </div>
      <div v-else>
        <p>You are brave. You march across the bridge with Mom and Kiddo. On the other side is a big door.</p>
        <p>You don't know how to open the door. Kiddo finds a button. It is too high to push.</p>
        <p>Kiddo likes to play baseball. Kiddo can throw a rock at the button. You find a rock. Kiddo throws it, and it pushes the button.</p>
        <p>The door opens. You can see a cave. The cave has two paths. Do you go left, or do you go right?</p>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/heading-through" class="chooser__choice chooser__choice-target">
            Go to the Left
          </nuxt-link>
          <nuxt-link to="/heading-across" class="chooser__choice chooser__choice-target">
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
