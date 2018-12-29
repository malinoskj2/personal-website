<template>

    <div class="section">

      <sequential-entrance animation="fadeInUp" delay="100">
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

  @-webkit-keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform:  translate3d(0, 100%, 0);
      transform:  translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform:  translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      -webkit-transform:  translate3d(0, 100%, 0);
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      -webkit-transform:  translate3d(0, 0, 0);
      transform:   translate3d(0, 0, 0);
    }
  }

  .fadeInUp {
    -webkit-animation: fadeInUp 4s cubic-bezier(0.455, 0.030, 0.515, 0.955);
    animation: fadeInUp .4s cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }


  .testAnim {
    transform: scale(2);
  }

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

  @keyframes jenter {
    0% {

      transform: translateY(32%) scale(.8);
    }
    50% {

      transform: translateY(16%) scale(1.1);
    }
    100% {
      transform: translateY(0%) scale(1);
    }
  }

  @-webkit-keyframes jenter {
    0% {

      transform: translateY(32%) scale(.8);
    }
    50% {

      transform: translateY(16%) scale(1.1);
    }
    100% {
      transform: translateY(0%) scale(1);
    }
  }
</style>
