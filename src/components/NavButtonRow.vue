<template>

  <div>

    <div class="column">
      <div class="field has-addons">

        <MediaButton :link="mediaLinks[0]" icon="fab fa-github"/>
        <MediaButton :link="mediaLinks[1]" icon="fab fa-mastodon"/>
        <MediaButton :link="mediaLinks[2]" icon="fas fa-envelope"/>

      </div>

    </div>
  </div>
</template>

<script>

import MediaButton from './MediaButton.vue';

export default {
  name: 'NavButtonRow',
  components: {
    MediaButton,
  },
  props: {},
  data() {
    return {};
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
    margin: auto;
  }

</style>
