<template>
  <div class="navless" >

      <div class="hero-head j-pseudo-nav">
        <div class="navbar-brand">
          <a id="back-button" @click="$router.go(-1)">
              <span class="icon is-medium has-text-info">
                <i class="fas fa-arrow-left"></i>
              </span>
          </a>
        </div>
      </div>

    <section class="section">
      <div class="container">
        <router-view name="content-a"></router-view>
      </div>
    </section>

    <router-view name="footer"/>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'NavLess',
  data() {
    return {};
  },
  components: {
  },
  methods: {

  },
  computed: {
  },
  created() {

  },
};
</script>
<style >
  .fa-arrow-left {
    color:white;
  }

  .j-pseudo-nav{
    margin: 1rem 0rem 0rem 1rem;
    position: fixed;
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
