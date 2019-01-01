<template>
<div class="projects-page">
  <div class="section">
    <div  class="columns"
          :style="{'min-height': dynamicMin +'px'}"
          ref="projectList">
    <ProjectTiles/>

    <div class="column is-4">
      <TagGroup groupTitle="Languages"/>
      <h1 id="tech-header">Tech</h1>

    </div>
    </div>
  </div>
</div>
</template>

<script>
import TagGroup from '@/components/TagGroup.vue';
import ProjectTiles from '@/components/ProjectTiles.vue';

export default {
  name: 'ProjectsPage',
  components: {
    TagGroup,
    ProjectTiles,
  },
  props: {},
  data() {
    return { dynamicMin: 0 };
  },
  mounted() {
    this.$nextTick(() => {
      this.dynamicMin = this.$refs.projectList.offsetHeight;
    });
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
  @media (min-width:769px) {
    .section {
      padding: 0rem 6rem 0rem 6rem;
    }
  }

</style>
