<template>


        <div class="j-title-container">
          <h1 class="title page-name" @click="goToHome">
            jessemalinosky.com
          </h1>
          <h2 class="subtitle">
            <vue-typer text='🔥🔥🔥'
                       initial-action='typing' :repeat="repeat"
                       :pre-type-delay="100" caret-animation='solid'
                       class="typer"
            ></vue-typer>

          </h2>
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
  }


</style>
