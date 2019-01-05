<template>
<div ref="pageContent" class="home-page">
  <div class="section">
    <div  class="columns"
          :style="{'min-height': dynamicMin +'px'}"
          ref="projectList">
    <ProjectTiles/>

      <div class="column is-4"  @mousemove.passive="throttledMouseMove">
        <section class="section shapes perf-hack">
          <div class="shape-base-b perf-hack" ref="shapeA"/>
          <div class="shape-base-c perf-hack" ref="shapeB"/>
          <div class="shape-base-a perf-hack" ref="shapeC"/>
        </section>
      </div>

    </div>
  </div>
</div>
</template>

<script>
import ProjectTiles from '@/components/ProjectTiles.vue';

import { TweenLite } from 'gsap';
import {
  CSSPlugin, Power3,
} from 'gsap/all';
import _ from 'lodash';

export default {
  name: 'HomePage',
  components: {
    ProjectTiles,
  },
  props: {},
  data() {
    return { dynamicMin: 0 };
  },
  created() {
    this.$store.dispatch('initProjects');
    this.throttledMouseMove = _.throttle(this.mouseMove, 100);
  },
  mounted() {
    this.$nextTick(() => {
      this.dynamicMin = this.$refs.projectList.offsetHeight;
    });
  },
  computed: {
  },
  methods: {
    mouseMove(event) {
      const {
        pageContent, shapeA, shapeB, shapeC,
      } = this.$refs;

      const percentPosX = Math.round((event.clientX / pageContent.offsetWidth) * 100) / 100;
      const percentPosY = Math.round((event.clientY / pageContent.offsetHeight) * 100) / 100;

      TweenLite.to(shapeC, 0.4, {
        x: percentPosY * 100 - 220,
        y: percentPosX * 100 - 160,
        scaleY: (1 + percentPosY * 2) / 3,
      });
      TweenLite.to(shapeA, 0.4, {
        x: -percentPosY * 80,
        y: -percentPosY * 100,
        scale: ((1 / 2) + percentPosX) / 2,
      });
      TweenLite.to(shapeB, 0.4, {
        x: percentPosX * 60 - 50,
        y: percentPosY * 60 - 100,
        scale: (1 + percentPosY) / 2,
      });
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

  .shapes {
    margin-top: 10rem;
    position: relative;
  }

  .shape-base-a {
    position:relative;
    width: 15rem;
    height: 12rem;
    border: solid #f46036;
    left:0%;
    z-index:3;
  }

  .shape-base-b {
    content: ' ';
    position: absolute;
    width: 8rem;
    height: 8rem;
    left: 0%;
    top: 50%;
    border: solid #d6f8d6 ;
    z-index: 1;
  }

  .shape-base-c{
    content: ' ';
    position: absolute;
    width: 13rem;
    height: 13rem;
    left: 0%;
    top: 10%;
    border: solid #2455c3;
    z-index: 2;
  }

  .perf-hack{
    will-change: contents;
    backface-visibility: visible;
  }
</style>
