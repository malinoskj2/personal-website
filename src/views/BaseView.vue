<template>
  <div class="base-view" >

    <section class="section">
      <div class="container">
        <router-view name="nav" class=""></router-view>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div ref="homePageRoot" class="home-page">
          <div  id="page-content" class="section">
            <div  class="columns is-centered"
                  :style="{'min-height': dynamicMin +'px'}"
                  ref="projectList">
              <router-view name="left-content"></router-view>

              <div class="column is-3 is-offset-1">
                  <router-view name="right-content"
                               :groupTitle="groupTitle"
                               :tagsWithState="tagsWithState"
                               @tag-click="updateActiveTags"/>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <router-view name="footer"/>

  </div>
</template>

<script>
/* eslint-disable no-undef */

// @ is an alias to /src

export default {
  name: 'BaseView',
  data() {
    return {
      dynamicMin: 0,
      reactiveShapes: true,
      shapeKind: 'rectangle',
    };
  },
  props: {
    groupTitle: String,
  },
  methods: {
    updateActiveTags(payload) {
      this.$store.commit('updateActiveTags', payload);
    },
  },
  computed: {
    tagsWithState() {
      return this.$store.getters.getTagsWithState;
    },
  },
  created() {
  },
  mounted() {
    this.$nextTick(() => {
      this.dynamicMin = this.$refs.projectList.offsetHeight;
    });
  },
};
</script>
<style scoped>
  @media (min-width:769px) {
    #page-content {
      padding: 0rem 5.5rem 0rem 5.5rem;
    }
  }
  .home-page {
    min-height: 720px;
  }
  #page-content {
    margin-top: -4rem;
  }
</style>
