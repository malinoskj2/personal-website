<template>

  <div>


            <div class="hero-body">
              <div class="container has-text-centered">

                  <h1 class="title who-header">
                    <div id="main-typer-container">
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
