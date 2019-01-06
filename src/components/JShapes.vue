<template>

  <section ref="shapeContainer"
            class="section shapes perf-hack">

    <svg xmlns="http://www.w3.org/2000/svg"
         ref="shapeC"
         class="shape shape-c"
         width="100%" height="100%">
      <path :class="shapeKind" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg"
         ref="shapeB"
         class="shape shape-b">
      <path :class="shapeKind" />
    </svg>

    <svg xmlns="http://www.w3.org/2000/svg"
         ref="shapeA"
         class="shape shape-a">
      <path :class="shapeKind" />
    </svg>

  </section>
</template>

<script>
import throttle from 'lodash/throttle';
import { TweenLite } from 'gsap';

export default {
  name: 'JShapes',
  data() {
    return {
    };
  },
  props: {
    reactive: Boolean,
    shapeKind: String,
  },
  created() {
    this.throttledMouseMove = throttle(this.mouseMove, 100);
  },
  mounted() {
    if (this.$props.reactive) {
         this.$refs.shapeContainer
         .addEventListener('mousemove', this.throttledMouseMove, { passive: true });
    }
  },
  computed: {
    shapeSource() {
      return `../resources/${this.shapeKind}.svg`;
    },
  },
  methods: {
    mouseMove(event) {
      const {
        shapeA, shapeB, shapeC, shapeContainer,
      } = this.$refs;

      const percentPosX = Math.round((event.clientX / shapeContainer.offsetWidth) * 100) / 100;
      const percentPosY = Math.round((event.clientY / shapeContainer.offsetHeight) * 100)
        / 100;


      TweenLite.to(shapeA, 0.3, {
        y: percentPosY * 40,
        scale: 1 + (percentPosX * percentPosY / 5),
      });
      TweenLite.to(shapeB, 0.3, {
        y: -percentPosY * 40,
        transformOrigin: '0% 0%',
      });
      TweenLite.to(shapeC, 0.3, {
        x: -percentPosY * 30,
        scale: 1 - (percentPosX * percentPosY / 25),
      });
    },
  },
};
</script>

<style scoped>
  .shapes {
    width:50%;
    height:50%;

    padding-left: 0rem !important;
    position:  absolute;
  }

  .perf-hack{
    will-change: contents;
    backface-visibility: visible;
  }

  svg {
    overflow: visible;
    box-shadow : 0px -0px 300px transparent /*trick for chrome*/
  }

  .shape{
    fill: transparent;
    stroke-width: 2;
  }

  .circle {
    d: path("M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0");
  }

  .rectangle {
    d: path("M0,0 100,0 100,100 0,100 Z");
  }

  .triangle {
    d: path("M 5,50 97.5,5 97.5,95 Z")
  }

  .shape-a {
    width: 50%;
    height: 50%;

    x:-30%;
    y:-40%;
    stroke: #f46036 !important;
  }

  .shape-b {
    width: 30%;
    height: 30%;

    x:0%;
    y:10%;

    stroke: #2455c3 !important;
  }

  .shape-c {
    width: 15%;
    height: 15%;

    x:0%;
    y:-10%;

    stroke: #d6f8d6 !important;
  }
</style>
