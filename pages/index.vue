<template>
  <div>
    <section :class="['container', readerClass]">
      <h1 class="pulp">Escape <small>from the</small> <span>Maze Planet</span></h1>

      <story title="Merry Christmas!">
        <figure class="pulpbox"><img class="pulpbox--image" src="~/assets/family.jpg"></figure>

        <p>The Miles Rausch Family has completed another stellar year, and we're celebrating it with this text adventure story. Young or old, choose your own adventure with Kiddo &amp; Sweets. Learn more about our 2017 as you try to escape the maze planet, Skoor!</p>

        <Chooser title="Your Reading Level">
          <p>This adventure has two different reading levels: Young and Old. Choose your reading level below to start the story.</p>

          <div slot="choices" class="chooser__choices">
            <button class="chooser__choice chooser__choice-target" @click.prevent="chooseReadingLevel('young')">
                I am a Young Reader
            </button>
            <button class="chooser__choice chooser__choice-target" @click.prevent="chooseReadingLevel('old')">
                I am an Old Reader
            </button>
          </div>
        </Chooser>
      </story>

      <story title="Hello, Fruckles" v-if="readingLevelChosen">
        <div v-if="$store.state.readingLevel === 'old'">
          <figure class="pulpbox"><img class="pulpbox--image" src="~/assets/old_fruckles.jpg"></figure>
          <p>You are the family pet, Fruckles, who Kiddo &amp; Sweets picked up on one of their many space adventures. Fruckles is half Shar Pei, half cheetah, full alien. Kiddo &amp; Sweets never have an adventure without you, and Escape from the Maze Planet is no exception. They rely on you to use your knowledge and wisdom to help them make decisions along the way. Are you up to the challenge?</p>
        </div>
        <div v-else-if="$store.state.readingLevel === 'young'">
          <figure class="pulpbox"><img class="pulpbox--image" src="~/assets/young_fruckles.jpg"></figure>
          <p>Your name is Fruckles. You are part dog and part cheetah. You are an alien pet. You help Kiddo and Sweets decide what to do.</p>
        </div>

        <Chooser>
          <nav slot="choices" class="chooser__choices">
            <nuxt-link to="/landing-on-skoor" class="chooser__choice chooser__choice-target">
              Begin the Story
            </nuxt-link>
          </nav>
        </Chooser>
      </story>
    </section>
  </div>
</template>

<script>
  import Chooser from '~/components/Chooser.vue'
  import Story from '~/components/Story.vue'

  export default {
    layout: 'home',
    data: () => {
      return {
        readingLevelChosen: false,
        readerClass: ''
      }
    },
    methods: {
      chooseReadingLevel (readingLevel) {
        this.$store.commit('setReadingLevel', readingLevel)
        this.readerClass = `${this.$store.state.readingLevel}reader`
        this.readingLevelChosen = true
      }
    },
    components: {
      Chooser,
      Story
    }
  }
</script>

<style scoped>
  h1 {
    display: block;
    font-size: 3rem;
    text-align: center;
  }

  h1 small {
    display: inline-block;
    font-size: 1.5rem;
    line-height: 1.2;
    text-align: center;
    vertical-align: middle;
    width: 3em;
  }

  .pulpbox {
    max-height: 75vh;
  }
</style>
