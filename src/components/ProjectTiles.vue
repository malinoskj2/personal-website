<template>
  <div class="section">

    <div class="columns">

      <div  class="column is-8">
        <ProjectTile :projectInfo="getProjects[0]"/>
      </div>
      <div class="column is-4">
          <ProjectDescripBox :projectInfo="getProjects[0]"/>
      </div>
    </div>

    <div class="columns">
      <div  class="column is-8">
        <ProjectTile :projectInfo="getProjects[2]"/>
      </div>
      <div class="column is-4">
        <ProjectDescripBox :projectInfo="getProjects[2]"/>
      </div>
    </div>

    <div class="columns">
      <div class="column is-8">
        <ProjectTile :projectInfo="getProjects[3]"/>
      </div>
      <div class="column is-4">
        <ProjectDescripBox :projectInfo="getProjects[3]"/>
      </div>
    </div>

  </div>
</template>

<script>
/* eslint-disable vue/no-unused-components */

import ProjectTile from '@/components/ProjectTile.vue';
import ProjectDescripBox from '@/components/ProjectDescripBox.vue';

export default {
  name: 'ProjectTiles',
  components: {
    ProjectTile,
    ProjectDescripBox,
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
