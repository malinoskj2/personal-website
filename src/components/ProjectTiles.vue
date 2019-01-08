<template>


              <div  class="column is-4-fullhd is-8-desktop">
                <div id="list-title">
                  <h1><em><strong>repos</strong></em>
                  </h1>
                  <div class="border-dummy"></div>
                </div>


                <sequential-entrance animation="fadeInUp" delay="200">
                <div class="j-project"
                     v-for="(project) in projectsFiltered"
                     :key="project.name" >

                <div class="columns">
                  <div class="column is-12">

                      <ProjectDescripBox
                        :projectInfo="project"/>

                  </div>
                </div>
              </div>
              </sequential-entrance>
              </div>
</template>

<script>
import ProjectDescripBox from '@/components/ProjectDescripBox.vue';


export default {
  name: 'ProjectTiles',
  components: {
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
    // If a project does not contain all active tags it is not included
    projectsFiltered() {
      return this.$store.getters.getProjectsFiltered;
    },
  },
  methods: {

  },
};
</script>

<style scoped>

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
    -webkit-animation: fadeInUp .2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
    animation: fadeInUp .2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }

  #list-title {
    font-title: Karla;
    margin-bottom: 1rem;
  }

  .border-dummy {
    border-bottom: 1px solid #292f36;

    transform-origin: left;
    width: 30rem;
    animation: 300ms 50ms draw-border-anim forwards;
  }

  @keyframes draw-border-anim {
    0% {
      transform: scaleX(0) scaleY(2);
    }
    100% {
      transform:scaleX(.5) scaleY(2);
    }
  }
</style>
