<template>
<div ref="homePageRoot" class="home-page">
  <div  id="page-content" class="section">
    <div  class="columns is-centered"
          :style="{'min-height': dynamicMin +'px'}"
          ref="projectList">
    <ProjectTiles/>

      <div class="column is-4">
        <JShapes
          :reactive="reactiveShapes"
          :shapeKind="shapeKind"
        />
      </div>

    </div>
  </div>
</div>
</template>

<script>
import ProjectTiles from '@/components/ProjectTiles.vue';
import JShapes from '@/components/JShapes.vue';

export default {
  name: 'HomePage',
  components: {
    ProjectTiles,
    JShapes,
  },
  props: {},
  data() {
    return {
      dynamicMin: 0,
      reactiveShapes: true,
      shapeKind: 'rectangle',
    };
  },
  created() {
    this.$store.dispatch('initProjects');
  },
  mounted() {
    this.$nextTick(() => {
      this.dynamicMin = this.$refs.projectList.offsetHeight;
    });
  },
  computed: {
  },
  methods: {
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
