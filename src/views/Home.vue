<template>
  <div class="home">
    <p> Unimplemented</p>
    <ContentBoxA :links="mediaLinks"> </ContentBoxA>
  </div>
</template>

<script>
// @ is an alias to /src
import ContentBoxA from '@/components/ContentBoxA.vue';

export default {
  name: 'home',
  components: {
    ContentBoxA,
  },
  computed: {
    mediaLinks() {
      return this.$store.getters.getLinks;
    },
  },
};
</script>
