<template>

  <div class="about-page">
    <div class="minimum">

      <div>

            <div class="hero-body">
              <div class="container has-text-centered">
                <transition appear name="flip-horizontal">
                  <h1 class="title who-header" :class="{cScale: smallHeader}">
                    <div id="main-typer-container">
                      <vue-typer :text='typerMainText'
                                 :repeat="0"
                                 :pre-type-delay="1200" caret-animation='solid'
                                 class="typer"
                      ></vue-typer>
                    </div>
                  </h1>

                </transition>
              </div>
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

    <Scroll-view :offset="20">
      <template slot-scope="markers">
        <scroll-marker
          name="sectionA"
          key="sectionA"
          :visible="markers.sectionA"
          :spacing="0"
          @isVisible="markerAVisible"
          @isNotVisible="markerANotVisible">
        </scroll-marker>
        <scroll-marker
          name="sectionB"
          key="sectionB"
          :visible="markers.sectionB"
          :spacing="240"
          @isVisible="markerBVisible"
          @isNotVisible="markerBNotVisible">
        </scroll-marker>

      </template>
    </Scroll-view>


  </div>

</template>

<script>


export default {
  name: 'InteractiveHeader',
  components: {
  },
  props: {},
  data() {
    return {
      typerMainText: ['$whoami'],
      typerLeftText: ['➡ developer'],
      typerRightText: [' '],
      cardLeftVisible: false,
      cardRightVisible: false,
      smallHeader: false,
    };
  },
  computed: {},
  methods: {
    markerAVisible(name) {
      this.smallHeader = true;
    },
    markerANotVisible(name) {
      this.smallHeader = false;
    },
    markerBVisible(name) {
      this.cardLeftVisible = true;
      this.cardRightVisible = true;
      this.$nextTick(() => {
        this.cardLeftVisible = true;
        this.cardRightVisible = true;
      });
    },
    markerBNotVisible(name) {
    },
  },
};
</script>

<style scoped>

  .left-card-anim-enter-active{
    animation: 1s left-card-frames forwards;
  }

  @keyframes left-card-frames {
    0%{
      filter: opacity(0);
      transform: translateY(2rem);
    }
    25%{
      filter: opacity(1);
      transform: translateY(1.5rem);
    }
    100%{
      filter: opacity(1);
      transform: translateY(0rem);
    }
  }

  .right-card-anim-enter-active{
    animation: 1s right-card-frames forwards;
  }

  @keyframes right-card-frames {
    0%{
      filter: opacity(0);
      transform: translateY(-2rem);
    }
    25%{
      filter: opacity(1);
      transform: translateY(-1.5rem);
    }
    100%{
      filter: opacity(1);
      transform: translateY(0rem);
    }
  }

  .j-card {
    background: ghostwhite;
    border-radius: 2px;
    color: #f6f6f6;
    min-height: 20rem;
  }

  .minimum {

  }
  .about-content {
   margin-top: 120vh;
  }
  .about-page {
    background: #393d3f;
  }
  #main-typer-container .vue-typer >>> .custom.char.typed {

    font-family: Josefin sans;
    /* if we can clip, do it */
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;

    /* what will show through the text
        ~ or ~
       what will be the background of that element */
    background-image: url('../resources/gradient-bg.gif');

    color: ghostwhite;
  }

  @-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  @keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
  }
  #main-typer-container .vue-typer >>> .custom.caret {
    width: 4px;
    background-color: ghostwhite;
  }

  .j-card .vue-typer >>> .custom.char.typed {
    color: #393d3f;
    font-family: Josefin sans;
  }

  .j-card .vue-typer >>> .custom.caret {
    width: 4px;
    background-color: #393d3f;
  }


  #back-button {
    padding: .5rem 0rem 0rem .5rem;
    tranform-origin: 50% 50%;
    transform: scale(1);
    filter: opacity(.7);
    transition: transform 240ms, filter 240ms;
  }

  #back-button:hover {
    filter: opacity(1);
    transform: scale(1.1);
  }

  .who-header{
    position: fixed;
    left: 50%;
    transform:translateX(-50%) translateY(10rem) scale(3);
    transition: transform .4s cubic-bezier(0.455, 0.030, 0.515, 0.955);
  }

  .cScale {
    transform: translateX(-50%) translateY(0rem) scale(1);
  }

  @keyframes correct-scale {
    0%{
        transform: translateX(-50%) translateY(10rem) scale(3);
    }
    100%{
        transform: translateX(-50%) translateY(0rem) scale(1);
    }
  }

  .flip-horizontal-enter-active {
    -webkit-animation: flip-horizontal-bottom 1s
    cubic-bezier(0.455, 0.955, 0.455, 0.955) both;

    animation: flip-horizontal-bottom 1s
    cubic-bezier(0.455, 0.955, 0.455, 0.955) both ;
  }

  .flip-horizontal-leave-active {
    -webkit-animation: flip-horizontal-bottom 1s
    cubic-bezier(0.455, 0.955, 0.455, 0.955) both ;

    animation: flip-horizontal-bottom 1s
    cubic-bezier(0.455, 0.955, 0.455, 0.955) both ;
  }

  /* ----------------------------------------------
   * Generated by Animista on 2018-12-28 16:58:19
   * w: http://animista.net, t: @cssanimista
   * ---------------------------------------------- */

  /**
   * ----------------------------------------
   * animation flip-horizontal-bottom
   * ----------------------------------------
   */
  @-webkit-keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform:translateY(10rem) rotateX(0);
      transform:translateY(10rem) rotateX(0);
    }
    50% {
      -webkit-transform:translateY(10rem) rotateX(-180deg);
      transform:translateY(10rem) rotateX(-180deg);
    }
    75% {
      -webkit-transform:translateY(10rem) rotateX(-275deg);
      transform:translateY(10rem) rotateX(-275deg);
    }
    90% {
      -webkit-transform:translateY(10rem) rotateX(-360deg);
      transform:translateY(10rem) rotateX(-360deg);
    }
    100% {
      -webkit-transform:translateY(10rem) rotateX(-360deg);
      transform:translateY(10rem) rotateX(-360deg);
    }
  }
  @keyframes flip-horizontal-bottom {
    0% {
      -webkit-transform:translateY(10rem) rotateX(0);
      transform:translateY(10rem) rotateX(0);
    }
    50% {
      -webkit-transform:translateY(10rem) rotateX(-180deg);
      transform:translateY(10rem) rotateX(-180deg);
    }
    75% {
      -webkit-transform:translateY(10rem) rotateX(-275deg);
      transform:translateY(10rem) rotateX(-275deg);
    }
    90% {
      -webkit-transform:translateY(10rem) rotateX(-360deg);
      transform:translateY(10rem) rotateX(-360deg);
    }
    100% {
      -webkit-transform: translateY(10rem) rotateX(-360deg);
      transform:translateY(10rem) rotateX(-360deg);
    }
  }
</style>
