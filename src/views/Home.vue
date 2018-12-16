<template>
  <div class="home">

          <div class="container">

            <section class="hero j-big-content">
              <div class="hero-body">
                <div class="container">
                  <h1 class="title">
                    Hero title
                  </h1>
                  <h2 class="subtitle">
                    Hero subtitle
                  </h2>
                </div>
              </div>
            </section>

            <div class="columns is-centered">
              <div class="column has-text-centered" v-for="(item,index) in mediaLinks" :key="index">
                <ContentBoxSlim class="content-box"
                                :link="item" :index="index">
                </ContentBoxSlim>
              </div>

            </div>
          </div>


  </div>
</template>

<script>
// @ is an alias to /src
import ContentBoxSlim from '@/components/ContentBoxSlim.vue';

export default {
  name: 'home',
  components: {
    ContentBoxSlim,
  },


  computed: {
    mediaLinks() {
      return this.$store.getters.getLinks;
    },
    getALink() {
      return this.$store.getters.getLinks[0];
    },
  },
};
</script>
<style>

  .j-big-content {
    height: 46rem;
  }

</style>
