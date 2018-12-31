<template>

      <div class="section">

            <div  class="columns"
                  :style="{'min-height': dynamicMin +'px'}"
            ref="projectList">
              <div  class="column is-8">
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

              <div class="column is-4">
                <TagGroup groupTitle="Languages"
                          @tag-click="updateActiveTags"/>

                <h1 id="tech-header">Tech</h1>

              </div>


          </div>


      </div>

</template>

<script>
/* eslint-disable vue/no-unused-components */

import { mapGetters } from 'vuex';
import ProjectTile from '@/components/ProjectTile.vue';
import ProjectDescripBox from '@/components/ProjectDescripBox.vue';
import TagGroup from '@/components/TagGroup.vue';

export default {
  name: 'ProjectTiles',
  components: {
    ProjectTile,
    ProjectDescripBox,
    TagGroup,
  },
  props: {},
  data() {
    return {
      dynamicMin: 0,
      activeTags: [],
    };
  },
  computed: {

    getProjects() {
      const projects = this.$store.getters.getProjects;
      return projects;
    },
    // If a project does not contain all active tags it is not included
    projectsFiltered() {
      return this.$store.getters.getProjectsFiltered(this.activeTags);
    },

  },
  mounted() {
    this.$nextTick(() => {
      this.dynamicMin = this.$refs.projectList.offsetHeight;
    });
  },
  methods: {
    updateActiveTags(payload) {
      if (this.activeTags.includes(payload.name)) {
        this.activeTags = this.activeTags.filter(tagName => tagName !== payload.name);
      } else {
        this.activeTags.push(payload.name);
      }
    },
  },
};
</script>

<style scoped>

  @media (min-width:769px) {
    .section {
      padding: 0rem 6rem 0rem 6rem;
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
    -webkit-animation: fadeInUp .2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
    animation: fadeInUp .2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }

</style>
