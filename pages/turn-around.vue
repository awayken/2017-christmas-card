<template>
  <section class="container">
    <story title="Turn Around!">
      <figure class="pulpbox"><img class="pulpbox--image" src="~/assets/turn-around.jpg"></figure>
      <div v-if="$store.state.readingLevel === 'old'">
        <p>You don't wait for a second opinion. You immediately turn tail and make back the way you came. You don't even wait to see if anyone else is following you. You make it back to the start of the maze and find President Skoor asleep on his pedestal. You let out a ferocious roar and stir him from his slumber.</p>
        <p>"Why, you're back already? Oh, I know that look. That is the look of cowardice. I knew this maze was only fit for humanoids."</p>
        <p>The ground begins to rumble again and the walls around you sink back down. You hang your head in shame. When the walls have gone, you begin to slink back to the ship. President Skoor approaches you.</p>
        <p>"I think it's best that your family doesn't try to land here again," President Skoor says. "We don't appreciate cowards around here."</p>
        <p>When you get back to the ship, everyone is already there, looking downtrodden and disappointed. You go straight for your bed and lay down, feeling ashamed for giving up and letting everyone down in the process. In a few moments, the planet of Skoor is a beautiful green marble hanging in space, getting slowly smaller and smaller.</p>
      </div>
      <div v-else>
        <p>You turn around and run all the way back to the start. The President is asleep. You roar and wake him up.</p>
        <p>He says that you are not very brave. You feel bad because you gave up instead of trying your best.</p>
        <p>Everyone is on the space ship. They are sad that they have to leave. They are sad that they didn't win any prizes.</p>
      </div>

      <RauschStats />
    </story>
  </section>
</template>

<script>
  import Story from '~/components/Story.vue'
  import RauschStats from '~/components/RauschStats.vue'
  import Chooser from '~/components/Chooser.vue'

  export default {
    layout: 'deadend',
    components: {
      Story,
      RauschStats,
      Chooser
    }
  }
</script>

<style scoped>
  /* Special page styling */
</style>
