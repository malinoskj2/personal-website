<template>
  <div class="tile is-ancestor">

    <div class="tile is-4 is-parent is-vertical">

     <project-tile :projectInfo="testObj"/>
      <project-tile :projectInfo="testObj"/>

    </div>

    <div class="tile is-parent">
      <project-tile :projectInfo="testObj"/>
    </div>
  </div>
</template>

<script>
import ProjectTile from '@/components/ProjectTile.vue';

export default {
  name: 'ProjectTiles',
  components: {
    ProjectTile,
  },
  props: {},
  data() {
    return {
      testObj: {
        title: 'One',
        content: 'This is some test content',
      },
    };
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>


</style>
