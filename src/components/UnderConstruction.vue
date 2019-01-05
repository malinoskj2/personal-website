<template>
  <div ref="pageContent" class="home-container">

    <div class="content">
      <section class="section title-content">
        <HeroTitle></HeroTitle>
      </section>

    <section class="section">
      <div class="container">
        <div class="columns">

          <div class="column is-8">
            <ProjectTiles></ProjectTiles>
          </div>

          <div class="column is-4"  @mousemove.passive="throttledMouseMove">
            <section class="section shapes perf-hack">
              <div class="shape-base-b perf-hack" ref="shapeA"/>
              <div class="shape-base-c perf-hack" ref="shapeB"/>
              <div class="shape-base-a perf-hack" ref="shapeC"/>
            </section>
          </div>

        </div>

      </div>
    </section>

    </div>
  </div>

</template>

<script>
import HeroTitle from '@/components/HeroTitle.vue';
import ProjectTiles from '@/components/ProjectTiles.vue';
import { TweenLite } from 'gsap';
import {
  CSSPlugin, Power3,
} from 'gsap/all';
import _ from 'lodash';

export default {
  name: 'UnderConstruction',
  components: {
    HeroTitle,
    ProjectTiles,
  },
  props: {
  },
  data() {
    return {
      contentIsHover: false,
    };
  },
  computed: {},
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
  created() {
    if (this.$store.state.api) {
      this.$store.dispatch('initProjects');
    } else {
      this.$store.dispatch('initApi').then(() => this.$store.dispatch('initProjects'));
    }

    this.throttledMouseMove = _.throttle(this.mouseMove, 100);
  },
};
</script>

<style scoped>
  .title-content {
    margin: 0rem 1rem 2rem 1rem;
  }
  .section {
    padding: 0rem 2rem 1rem 4rem;
    overflow:visible;
  }

  .shapes {
    margin-top: 10rem;
    position: relative;
  }
  .content {
    min-height: 30rem;
    background-color: transparent;
    overflow:visible;
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

  .slide-anim {
    animation: 10s slide-frames ease-in infinite;
  }

  @keyframes slide-frames {
    0% {
    transform: translateX(0) scaleX(2);
    }
    100% {
    transform: translateX(20%) scaleX(2);
    }
  }


</style>
