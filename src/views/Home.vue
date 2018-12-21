<template>
  <div class="home" >
    <section class="section nav-sec">
      <div class="container">


        <nav class="level j-header is-hidden-mobile">
          <div class="level-left">
            <div class="level-item">
              <router-view name="nav-left" class="" ></router-view>
            </div>
          </div>

          <div class="level-right">
            <div class="level-item">
              <transition appear name="fade">
                <router-view name="nav-right" class=""></router-view>
              </transition>
            </div>
          </div>
        </nav>


      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="columns ">
          <router-view name="content-a" class="column j-content" ></router-view>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'home',
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
<style>
  .home{
  }
  .j-header {
    overflow: visible
  }
  .j-content {
    border: solid 1px black;
  }
</style>
