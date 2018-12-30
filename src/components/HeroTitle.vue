<template>


        <div>
          <span >
            <router-link class="page-name title"
                         to="/">jessemalinosky.com</router-link>
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
    return {
      repeat: 0,
    };
  },
  computed: {
  },
  methods: {
  },
};
</script>

<style scoped>
  .page-name:hover {
    cursor: pointer;
  }

  .page-name{
    margin: auto auto auto 1rem;
    color: #444054;
  }

  .vue-typer >>> .custom.char.typed {
    color: #f46036;
    font-family: Utopia;
  }
</style>
