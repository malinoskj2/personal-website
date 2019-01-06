<template>
<div ref="homePageRoot" class="home-page">
  <div class="section">
    <div  class="columns"
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
    .section {
      padding: 0rem 6rem 0rem 6rem;
    }
  }
</style>
