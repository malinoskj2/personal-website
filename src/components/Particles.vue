<template>
  <vue-particles
    color="#2f243a"
    :particleOpacity="0.7"
    :particlesNumber="40"
    shapeType="circle"
    :particleSize="4"
    linesColor="#dedede"
    :linesWidth="1"
    :lineLinked="false"
    :lineOpacity="0.4"
    :linesDistance="150"
    :moveSpeed="1"
    :hoverEffect="false"
    hoverMode="grab"
    :clickEffect="false"
    clickMode="push"
  >
  </vue-particles>

</template>

<script>
export default {
  name: 'Particles',
  props: {},
  data() {
    return { locale: 'en' };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>


</style>
