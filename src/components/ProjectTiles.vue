<template>
              <div  class="column is-4-fullhd is-8-desktop">
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
</style>
