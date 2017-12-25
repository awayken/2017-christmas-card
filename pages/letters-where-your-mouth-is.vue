<template>
  <section class="container">
    <story title="Put Your Letters Where Your Mouth Is">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You and Dad and Sweets climb onto the bison. You snuggle between Dad and Sweets, and the bison gallops away. The green bison moves swiftly, and the landscape becomes a blur around you. When it stops, you find yourself on a grassy plain. The temperature is much more comfortable, and you close your eyes and take a light rest.</p>
        <p>You awaken with a start when the bison stops suddenly. All three of you are thrown forward and into the tall, waving grass. The bison snorts at you, then it turns and gallops away. You shake the dust off your fur and look around. The grass is so tall that you have to jump to see over it.</p>
        <p>"Look at that!" Sweets says. "It's a giant stone head!"</p>
        <p>You look where she's pointing. You can see the top of a giant stone statue. The face is grave and serious. It seems to be watching you as you bound after Sweets. She runs up to the statue and stares at it closely. When you get close enough, you can see that the mouth appears to be open and that inside the mouth is a door with a lock. There is a shape on the lock. Sweets walks around the statue, exploring it from every side.</p>
        <p>"Whoever opens this door shall find their end," Dad says, reading from an inscription on the side. "I'm not sure I like the sound of that." Dad inspects the lock, too. "It looks like you need a special key to open the door. This door might lead to the end of the maze."</p>
        <p>"Maybe one of these?" Sweets says, coming around the statue with a bucket of keys. "I found it on the other side."</p>
        <p>"Perfect. Now we just have to match the shape."</p>
        <p>Sweets looks at the lock again. "I know this shape! In Pre-K this year I learned every letter in the alphabet. This is the letter R." Sweets runs over to the bucket and begins to sort through the keys. She tosses out an "A", "I", "M" and "H". You find a key in the grass. You chirp and push it toward Sweets with your nose. "That's it! That's the R!"</p>
        <p>Sweets takes the key and puts it into the lock. The lock springs open, and the doors push in. Great job, Sweets! Beyond is a smooth path and the sounds of cheering. With the door open, you spring ahead. You know the finish line is close, and you can't wait to be done.</p>
      </div>
      <div v-else>
        <p>You ride on the bison. It runs fast. When it stops, you are on a prairie. The bison stops and you fall into the grass.</p>
        <p>Sweets finds a large statue that is just a head. The mouth is a big door. The door has a lock that needs a special key.</p>
        <p>The key has a special shape. It is the shape of the letter R. Sweets learned all her letters in school this year. You help her find the right key.</p>
        <p>The key opens the door. You can hear people cheering. You are almost done with the maze!</p>
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
