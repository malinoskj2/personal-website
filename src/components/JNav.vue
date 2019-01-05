<template>
  <section class="section">
    <div class="columns">

      <div  class="column is-8">
        <HeroTitle></HeroTitle>
      </div>
      <div  class="column is-4">

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
