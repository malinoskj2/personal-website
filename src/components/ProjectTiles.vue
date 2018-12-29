<template>

      <div class="section">

        <div class="columns">
          <div class="column">
            <div class="field is-grouped is-grouped-multiline">

              <div v-for="(tag,index) in getTagsWithState"  :key="index"
                   class="control"
                   @click="updateActiveTags({name: tag.name})">

                <div class="tags has-addons">
                  <span class="tag is-unselectable j-tag low-base-opac">{{tag.name}}</span>

                  <transition name="active-tag" mode="out-in">
                    <a v-if="tag.isActive" class="tag is-delete"></a>
                  </transition>
                </div>

              </div>
            </div>
          </div>
        </div>

        <sequential-entrance animation="fadeInUp" delay="100">
          <div class="j-project"
               v-for="(project) in projectsFiltered"
               :key="project.name" >

            <div class="columns">

              <div  class="column is-8">
                <transition appear name="lrgbox-trans">
                  <ProjectDescripBox
                    :projectInfo="project" @tag-click="updateActiveTags"/>
                </transition>
              </div>

              <div class="column is-4">
                <ProjectTile class="prj-item" :projectInfo="project"/>
              </div>

            </div>
          </div>
        </sequential-entrance>

      </div>

</template>

<script>
/* eslint-disable vue/no-unused-components */

import { mapGetters } from 'vuex';
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
    getTagsWithState() {
      return this.$store.getters.getAllTags.map((tag) => {
        const isActive = this.activeTags.includes(tag);
        return {
          name: tag,
          isActive,
        };
      });
    },
  },
  methods: {
    updateActiveTags(payload) {
      if (this.activeTags.includes(payload.name)) {
        this.activeTags = this.activeTags.filter(tagName => tagName !== payload.name);
      } else {
        this.activeTags.push(payload.name);
      }
    },
    printAllTags() {
      this.$store.getters.getAllTags.forEach(tag => console.log(tag));
    },
  },
};
</script>

<style lang="scss" scoped>
  .tag{
    border: solid 1px #292f36;
  }

  .has-addons {
    transition: all 1s;
  }

  .section {
    padding: 0rem 6rem 0rem 6rem;
  }

  .active-tag-enter-active{
    transform-origin: 0% 0%;
    animation: 160ms tag-grow-in cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }
  .active-tag-leave-active{
    transform-origin: 0% 0%;
    animation: 160ms tag-grow-in cubic-bezier(0.455, 0.030, 0.515, 0.955) reverse;
  }
  @keyframes tag-grow-in {
    0%{
      transform: scaleX(0)
    }
    100%{
      transform: scaleX(1);
    }
  }

  .j-tag {
    filter: opacity(.92);
  }
  .low-base-opac {
    filter: opacity(.8);
  }

  .low-base-opac:hover {
    filter: opacity(1);
    cursor: pointer;
  }

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
    -webkit-animation: fadeInUp .2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
    animation: fadeInUp .2s cubic-bezier(0.455, 0.030, 0.515, 0.955);
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
