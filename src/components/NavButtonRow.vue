<template>

  <div>

    <div class="column">
      <div class="field has-addons">
        <router-link class="page-link" class-active="active" to="/">
          <p>home</p>
        </router-link>
        <router-link class="page-link" class-active="active" to="/projects">
          <p>projects</p>
        </router-link>
        <router-link class="page-link" class-active="active" to="/about">
          <p>about</p>
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

    background: linear-gradient(
      to bottom, #f46036 0%,
      #f46036 100%
    ) repeat-x 0 100%;
    background-size: 4px 0px;

    text-decoration: none;
    transition: background-size .2s;
  }

  a {
    outline:0;
  }

  .router-link-exact-active{
    background-size: 4px 50px;
    cursor: pointer;
  }

</style>
