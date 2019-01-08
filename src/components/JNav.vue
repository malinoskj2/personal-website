<template>
  <section class="section">
    <div class="columns is-centered">

      <div  class="column is-4-fullhd is-8-desktop">
        <HeroTitle></HeroTitle>
      </div>
      <div  class="column is-4 is-hidden-mobile">
        <a id="about-button" class="button is-outlined is-pulled-right">About</a>
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


</style>
