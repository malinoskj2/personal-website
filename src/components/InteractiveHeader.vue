<template>

  <div>

    <div class="about-page">
      <div class="hero-body">
        <div class="container has-text-centered">

          <h1 class="title who-header who-header-tall" :class="{cScale: mainTextSmall }">
            <div id="main-typer-container" ref="mainTyper">
              <vue-typer :text='typerMainText'
                         :repeat="0"
                         :pre-type-delay="1200" caret-animation='solid'
                         class="typer"
              ></vue-typer>
            </div>
          </h1>

        </div>
      </div>

      <div class="container about-content">
        <div class="columns">

          <div class="column">
            <transition name="left-card-anim">
              <div v-if="cardLeftVisible" class="box j-card" key="about-card-left">
                <vue-typer :text='typerLeftText'
                           :repeat="0"
                           :pre-type-delay="1200" caret-animation='solid'
                           class="typer"
                ></vue-typer>
              </div>
            </transition>
          </div>

          <div class="column">
            <transition name="right-card-anim">
              <div v-if="cardRightVisible" class="box j-card" key="about-card-right">
                <vue-typer :text='typerRightText'
                           :repeat="0"
                           :pre-type-delay="1200" caret-animation='solid'
                           class="typer"
                ></vue-typer>
              </div>
            </transition>
          </div>

        </div>
      </div>


    </div>

    <intersect @enter="elementEntered" @leave="elementLeft">
      <div></div>
    </intersect>

  </div>

</template>

<script>
import { TweenLite } from 'gsap';
import {
  CSSPlugin, Power3,
} from 'gsap/all';
import Intersect from 'vue-intersect';

export default {
  name: 'InteractiveHeader',
  components: { Intersect },
  props: {},
  data() {
    return {
      typerMainText: ['$whoami'],
      typerLeftText: ['➡ developer'],
      typerRightText: [' '],
      cardLeftVisible: false,
      cardRightVisible: false,
      mainTextSmall: true,
      timeLine: null,
      markerNames: [{ name: 'first', valSize: 0, valPosY: -10 },
        { name: 'second', valSize: 0.3, valPosY: -20 },
        { name: 'third', valSize: 0.4, valPosY: -30 },
        { name: 'fourth', valSize: 0.6, valPosY: -40 },
        { name: 'fifth', valSize: 1, valPosY: -50 }],
    };
  },
  computed: {},
  methods: {
    elementEntered() {
      this.showBoxes();
      this.positionHeaderSmall();
    },
    elementLeft() {
      this.positionHeaderBig();
    },
    showBoxes() {
      this.cardLeftVisible = true;
      this.cardRightVisible = true;
    },
    positionHeaderSmall() {
      const { mainTyper } = this.$refs;
      TweenLite.to(mainTyper, 0.3, {
        y: '-70rem',
        scaleX: 0.33,
        scaleY: 0.33,
        ease: Power3.easeOut,
      });
    },
    positionHeaderBig() {
      const { mainTyper } = this.$refs;
      TweenLite.to(mainTyper, 0.3, {
        y: '0rem',
        scaleX: 1,
        scaleY: 1,
        ease: Power3.easeOut,
      });
    },
  },
};
</script>

<style scoped>
  .j-card {
    background: ghostwhite;
    border-radius: 2px;
    color: #f6f6f6;
    min-height: 20rem;
  }

  .about-page {
    min-height: 80rem;
  }


  .who-header{
    position: relative;
    left: 50%;
    transform:translateX(-50%) translateY(10rem) scale(3);
  }
  @media (min-height:625px) {
    .who-header-tall {
      position: fixed;
    }
  }

  .left-card-anim-enter-active{
    animation: 1s left-card-frames forwards;
  }
  .right-card-anim-enter-active{
    animation: 1s right-card-frames forwards;
  }

  @keyframes left-card-frames {
    0%{
      filter: opacity(0);
      transform: scale(2) translateX(-20rem) translateY(30rem);
    }
    25%{
      filter: opacity(1);
      transform: scale(1.5) translateX(-15rem) translateY(20rem);
    }
    100%{
      filter: opacity(1);
      transform: scale(1) translateX(0rem)translateY(0rem);
    }
  }

  @keyframes right-card-frames {
    0%{
      filter: opacity(0);
      transform: scale(2) translateX(20rem) translateY(30rem);
    }
    25%{
      filter: opacity(1);
      transform: scale(1.5) translateX(15rem) translateY(20rem);
    }
    100%{
      filter: opacity(1);
      transform: scale(1) translateX(0rem)translateY(0rem);
    }
  }

  .j-card {
    background: ghostwhite;
    border-radius: 2px;
    color: #f6f6f6;
    min-height: 20rem;
  }

  .about-content {
   margin-top: 120vh;
  }

  #main-typer-container .vue-typer >>> .custom.char.typed {

    font-family: Karla;

    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    background-image: url('../resources/gradient-bg.gif');

    color: ghostwhite;
  }

  #main-typer-container .vue-typer >>> .custom.caret {
    width: 4px;
    background-color: ghostwhite;
  }

  .j-card .vue-typer >>> .custom.char.typed {
    color: #393d3f;
    font-family: Lato;
  }

  .j-card .vue-typer >>> .custom.caret {
    width: 4px;
    background-color: #393d3f;
  }


</style>
