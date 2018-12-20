<template>

      <div class="hero-body">
        <div class="container j-title-container">
          <h1 class="title">
            jessemalinosky.com
          </h1>
          <h2 class="subtitle j-subtitle">
            🔥🔥🔥
          </h2>
        </div>
      </div>


</template>

<script>
export default {
  name: 'HeroTitle',
  props: {},
  data() {
    return { };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
  .j-title-container {
    filter: blur(.02rem);
    -webkit-animation: blur-in-out 3000ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards ;
    animation:         blur-in-out 3000ms cubic-bezier(0.645, 0.045, 0.355, 1) forwards;
  }

  .j-subtitle {
    color: #f46036;
  }
</style>
