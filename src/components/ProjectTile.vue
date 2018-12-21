<template>
  <div class="tile is-child box">
    <p class="title">{{projectInfo.title}}</p>
    <p>{{projectInfo.content}}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectTile',
  props: {
    projectInfo: Object,
  },
  data() {
    return { };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>


</style>
