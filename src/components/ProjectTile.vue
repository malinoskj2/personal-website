<template>
  <div class="tile is-child box">
    <p class="title">{{projectInfo.name}}</p>
    <p>{{projectInfo.description}}</p>
    <p>{{projectInfo.numCommits}}</p>
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
