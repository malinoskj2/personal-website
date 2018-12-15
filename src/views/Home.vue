<template>
  <div class="home">

    <div>
      <ContentBoxSlim class="content-box"
        v-for="(item,index) in mediaLinks" :key="index"
        :link="item" :index="index"></ContentBoxSlim>
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

  .home {
    margin: 2rem;
  }

  .content-box {
    margin: 2rem;

  }


</style>
