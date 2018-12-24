<template>
  <div class="tile is-ancestor">

    <div class="tile is-4 is-parent is-vertical">
      <ProjectTile :projectInfo="getProjects[0]"/>
      <ProjectTile :projectInfo="getProjects[1]"/>
    </div>

    <div class="tile is-parent">
      <ProjectTile :projectInfo="getProjects[2]"/>
    </div>

    <div class="tile is-parent">
      <ProjectTile :projectInfo="getProjects[3]"/>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import ProjectTile from '@/components/ProjectTile.vue';

export default {
  name: 'ProjectTiles',
  components: {
    ProjectTile,
  },
  props: {},
  data() {
    return {
      testObj: {
        title: 'One',
        content: 'This is some test content',
      },
    };
  },
  computed: {
    getProjects() {
      const projects = this.$store.getters.getProjects;
      return projects;
    },
    projectGroups() {
      const projects = this.$store.getters.getProjects;
      const numGroups = Math.ceil(projects.length / 3);
      return projects;
    },
  },
  methods: {
  },
};
</script>

<style scoped>


</style>
