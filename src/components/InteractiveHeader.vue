<template>

  <div class="about-page">


            <div class="hero-body">
              <div class="container has-text-centered">

                  <h1 class="title who-header">
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

    <div class="spacer-a"></div>
    <scroll-view>

      <template slot-scope="markers">
        <scroll-marker
          v-for="marker in markerNames"
          :name="marker.name"
          :key="marker.name"
          :visible="markers[marker.name]"
          :spacing="70"
          @isVisible="markerAVisible(marker)"
        ></scroll-marker>
      </template>
    </scroll-view>


  </div>

</template>

<script>
import { TimelineLite } from 'gsap';
import {
  CSSPlugin, Back, Elastic, Expo,
} from 'gsap/all';

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
      timeLine: null,
      markerNames: [{ name: 'first', valSize: 0, valPosY: -10 },
        { name: 'second', valSize: 0.3, valPosY: -20 },
        { name: 'third', valSize: 0.4, valPosY: -30 },
        { name: 'fourth', valSize: 0.6, valPosY: -40 },
        { name: 'fifth', valSize: 1, valPosY: -50 }],
    };
  },
  computed: {},
  mounted() {
    this.timeline = new TimelineLite({ paused: true });
    const { mainTyper } = this.$refs;

    this.timeline.to(mainTyper, 0.5, {
      scaleX: 0.4,
      scaleY: 0.4,
      y: -50,
    });
  },
  methods: {
    markerAVisible(marker) {
      console.log(`Marker${marker.name} visible`);

      this.timeline.progress(marker.valSize, false);
    },

  },
};
</script>

<style scoped>
  .spacer-a {
    min-height: 100rem;
  }
  .about-page {
    min-height: 200rem;
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

  .who-header{
    position: fixed;
    left: 50%;
    transform:translateX(-50%) translateY(10rem) scale(3);
  }

</style>
