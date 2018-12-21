<template>

  <div>

    <div class="column">
      <div class="field has-addons">

        <router-link class="page-link" :to="mediaLinks[3].url">
          {{mediaLinks[3].website}}
        </router-link>
        <router-link class="page-link" :to="mediaLinks[4].url">
          {{mediaLinks[4].website}}
        </router-link>

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
  .page-link {
    color: #444054;
    margin: auto 1rem auto 1rem;
  }

</style>
