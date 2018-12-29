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
      <router-view name="content-a"></router-view>
    </section>

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
  .navless {
    background: #292f36;
  }

  .fa-arrow-left {
    color:white;
  }


  .j-pseudo-nav{
    margin: 1rem 0rem 0rem 1rem;
    position: fixed;
  }
</style>
