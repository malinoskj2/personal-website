<template>
  <section class="hero is-primary is-medium interactive-header">
    <!-- Hero head: will stick at the top -->
    <div class="hero-head">
      <div class="navbar-brand">

        <a id="back-button" @click="$router.go(-1)">
              <span class="icon is-medium has-text-info">
                <i class="fas fa-arrow-left"></i>
              </span>
        </a>
      </div>
    </div>

    <!-- Hero content: will be in the middle -->
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          Title
        </h1>
        <h2 class="subtitle">
          Subtitle
        </h2>
      </div>
    </div>

    <!-- Hero footer: will stick at the bottom -->
    <div class="hero-foot">
      <p> footer </p>
    </div>

  </section>

</template>

<script>
export default {
  name: 'InteractiveHeader',
  props: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
  .interactive-header {
    background: #393d3f;;
  }

  .fa-arrow-left {
    color:white;
  }

  #back-button {
    padding: .5rem 0rem 0rem .5rem;
    tranform-origin: 50% 50%;
    transform: scale(1);
    filter: opacity(.7);
    transition: transform 240ms, filter 240ms;
  }

  #back-button:hover {
    filter: opacity(1);
    transform: scale(1.1);
  }

</style>
