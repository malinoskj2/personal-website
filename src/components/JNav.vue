<template>
  <section class="section">
    <div class="columns is-centered">

      <div class="column is-6-fullhd is-6-desktop title-section">

        <HeroTitle class="title-text"></HeroTitle>
        <span id="emoji-symbol">⭢</span>
      </div>
      <div  class="column is-6 is-hidden-mobile">
      </div>

    </div>
  </section>
</template>

<script>
import HeroTitle from '@/components/HeroTitle.vue';

export default {
  name: 'JNav',
  props: {},
  components: {
    HeroTitle,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
  @media (min-width:769px) {
    .section {
      padding: 0rem 6rem 0rem 6rem;
    }
  }

  #about-button {
    font-family: Karla;
    margin: 2rem 2.25rem 0rem 3rem;
    transform: translateY(5%);
  }

  .title-section {
  }


  #emoji-symbol {
    position: absolute;
    z-index: -200;
    transform: translate(-230%, -32%) scale(2.75);

    animation: 20s 2s emoji-move-frames cubic-bezier(0.075, 0.82, 0.165, 1) both infinite;


    color: #292f36;
  }

  @keyframes emoji-move-frames {
      0% {
        transform: translate(-230%, -32%) scale(2.75)
      }
      4% {
        transform: translate(-290%, -32%) scale(2.75)
      }
      8% {
        transform: translate(-230%, -32%) scale(2.75)
      }
      100% {
        transform: translate(-230%, -32%) scale(2.75)
      }
  }
</style>
