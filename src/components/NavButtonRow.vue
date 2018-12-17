<template>
  <div class="container root">
    <div>

      <div class="columns is-centered is-fluid">
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
import ContentBoxSlim from './ContentBoxSlim.vue';

export default {
  name: 'NavButtonRow',
  components: {
    ContentBoxSlim,
  },
  props: {
  },
  data() {
    return { };
  },
  computed: {
    mediaLinks() {
      return this.$store.getters.getLinks;
    },
  },
  methods: {},
};
</script>

<style scoped>
  .root {
    margin:auto;
  }

</style>
