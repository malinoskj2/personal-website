<template>


        <div class="title-container">

            <div>
              <h2 class="typer subtitle j-subtitle">{{textA}}</h2>
            </div>

            <vue-typer :style="{ opacity: textBVisible ? '1' : '0'}"
                       :text='textB'
                       initial-action='typing' :repeat="repeat"
                       :pre-type-delay="textBDelay" caret-animation='solid'
                       class="typer title main-text"
            ></vue-typer>

        </div>


</template>
<script>
export default {
  name: 'HeroTitle',
  props: {},
  data() {
    return {
      textA: 'Hello, I am',
      textB: 'Jesse Malinosky',
      textBVisible: true,
      textBDelay: 1500,
      repeat: 0,
    };
  },
  computed: {
  },
  methods: {
    showBText() {
      this.textBVisible = true;
    },
  },
};
</script>

<style scoped>

  .title {
    font-size: 2.5rem;
  }

  .title-container {
    margin-bottom: 20px;
  }

  .main-text {
    position:absolute;
  }

  .j-subtitle {
    color: #444054;
    font-family: 'Patua One', cursive;
  }

  .vue-typer >>> .custom.char.typed::first-line {
    color: #444054;
    font-family: 'Patua One', cursive;
  }
</style>
