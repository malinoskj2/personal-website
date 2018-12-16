<template>
  <div>

    <div class="columns is-centered">
      <div class="column has-text-centered" v-for="(item,index) in mediaLinks" :key="index">
        <ContentBoxSlim class="content-box"
                        :link="item" :index="index">
        </ContentBoxSlim>
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


</style>
