<template>
  <section class="section">
    <div class="columns is-centered">

      <div  class="column is-4-fullhd is-8-desktop">
        <HeroTitle></HeroTitle>
      </div>
      <div  class="column is-4 is-hidden-mobile">

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
</style>
