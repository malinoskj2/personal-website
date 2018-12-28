<template>

    <div class="section">

      <sequential-entrance fromBottom>
        <div class="j-project"
             v-for="(project) in getProjects"
             :key="project.name" >

          <div class="columns">

            <div  class="column is-8">
              <transition appear name="lrgbox-trans">
                <ProjectTile class="prj-item" :projectInfo="project"/>
              </transition>
            </div>

            <div class="column is-4">
              <ProjectDescripBox :projectInfo="project"/>
            </div>

          </div>
        </div>
      </sequential-entrance>

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

<style lang="scss" scoped>
  .lrgbox-trans-enter-active {
    filter: opacity(0);
    transform: translateY(-10%);
    animation: bounce-in -.2s .4s forwards;
  }
  .lrgbox-trans-leave-active {
    filter: opacity(0);
    transform: translateY(-10%);
    animation: bounce-in .4s reverse;
  }

  @keyframes bounce-in {
    0% {
      filter:opacity(0);
      transform: translateY(32%) scale(.8);
    }
    50% {
      filter: opacity(.5);
      transform: translateY(16%) scale(1.1);
    }
    100% {
      filter: opacity(1);
      transform: translateY(0%) scale(1);
    }
  }
</style>
