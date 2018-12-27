<template>
  <section class="section nav-sec">
    <div class="container">

      <nav class="level j-header is-hidden-mobile">

        <div class="level-left">
          <div class="level-item">
            <HeroTitle></HeroTitle>
          </div>
        </div>

        <div class="level-right">
          <div class="level-item">
            <transition appear name="fade">
              <NavButtonRow></NavButtonRow>
            </transition>
          </div>
        </div>

      </nav>

    </div>
  </section>
</template>

<script>
import HeroTitle from '@/components/HeroTitle.vue';
import NavButtonRow from '@/components/NavButtonRow.vue';

export default {
  name: 'JNav',
  props: {},
  components: {
    HeroTitle,
    NavButtonRow,
  },
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>


</style>
