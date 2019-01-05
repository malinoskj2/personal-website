<template>


        <div>
            <div>
              <vue-typer :text='textA'
                         initial-action='typing' :repeat="repeat"
                         :pre-type-delay="300" caret-animation='solid'
                         class="typer subtitle"
                         @completed="showBText"
              ></vue-typer>
            </div>

            <vue-typer :style="{ opacity: textBVisible ? '1' : '0'}"
                       :text='textB'
                       initial-action='typing' :repeat="repeat"
                       :pre-type-delay="textBDelay" caret-animation='solid'
                       class="typer title"
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
      textBVisible: false,
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

  .typer-title {
  }
  .title {
    font-size: 3rem;
  }

  .vue-typer >>> .custom.char.typed::first-line {
    color: #444054;
    font-family: 'Patua One', cursive;
  }
</style>
