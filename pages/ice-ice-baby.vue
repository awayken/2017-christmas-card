<template>
  <section class="container">
    <story title="Ice, Ice, Baby">
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You like the idea of cooling off instead of overheating, so you trot off to the right. The forest trees disappear and soon you're trudging through crisp, white snow. A clear path cuts through tall, billowing snow drifts on all sides of you. The sun is high and bright, but it doesn't do anything to warm you up. You start looking around for some warmth.</p>
        <p>"Look! Steamy water!" Sweets shouts. You see a bubbling sauna of green water just a couple feet from the path. You bound through the snow and splash right into the pond. It thaws your chilly paws, and Dad and Sweets dive in, too. The water feels great.</p>
        <p>As you're relaxing in the water, the wind comes up. It whips across the frozen terrain and blows snow into your eyes. You close your eyes, but the wind and snow and ice sting. You try to turn away from the wind, but it seems to be blowing in all directions.</p>
        <p>"This would be great if it wasn't for the wind," Dad says. "Good thing the wind isn't always blowing, but it's not very fun."</p>
        <p>"I know what we can do!" Sweets says. "In swimming lessons this year, I learned how to bob. When the wind starts to blow, we can bob under the water until the wind goes away."</p>
        <p>"That's a great idea, Sweets," Dad says. Right on cue, the wind kicked up, and all three of you bob under the water. When you come back up, the wind is gone. Great job, Sweets!</p>
        <p>As you relax in the water, two creatures show up. One looks like a green bison, and one looks like a green giant eagle. They both have saddles on them. "I bet those animals know the way out of this snowy desert," says Dad. "We should pick one to ride our way out of here."</p>
      </div>
      <div v-else>
        <p>You want to cool off, so you go right. The path takes you into snow. It is cold and bright. There are tall hills of snow called snow drifts.</p>
        <p>You are very cold. Sweets finds a pond of hot water. The hot water feels very good, but the wind hurts your face.</p>
        <p>Sweets learned how to bob under the water in swimming lessons. She teaches you to bob when the wind blows. The wind does not hurt your face now. Good job, Sweets!</p>
        <p>Two animals show up. One is a green bison. One is a giant green eagle. You can pick one and ride it. Which one will you ride?</p>
      </div>

      <Chooser title="Choose Your Path">
        <nav slot="choices" class="chooser__choices">
          <nuxt-link to="/letters-where-your-mouth-is" class="chooser__choice chooser__choice-target">
            Ride the Green Bison
          </nuxt-link>
          <nuxt-link to="/giant-green-eagle" class="chooser__choice chooser__choice-target">
            Ride the Giant Green Eagle
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
