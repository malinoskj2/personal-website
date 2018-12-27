<template>


        <div class="j-title-container">
          <span class="page-name title" @click="goToHome">
            jessemalinosky.com
          </span>

          <span class="subtitle">
            <vue-typer text='🔥'
                       initial-action='typing' :repeat="repeat"
                       :pre-type-delay="1200" caret-animation='solid'
                       class="typer"
            ></vue-typer>
          </span>

        </div>


</template>
<script>
export default {
  name: 'HeroTitle',
  props: {},
  data() {
    return { repeat: 0 };
  },
  computed: {
  },
  methods: {
    goToHome() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped>
  .page-name:hover {
    cursor: pointer;
  }
  h2 {
    position: absolute;
    top: 150%;

  }
  .page-name{
    color: #444054;
  }
  .j-title-container {

    color: #444054;
    filter: blur(.02rem);
  }
  .vue-typer >>> .custom.char.typed {
    color: #f46036;
    font-family: Utopia;
  }


</style>
