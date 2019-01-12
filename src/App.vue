<template>

  <div id="app">

    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous">

    <link href="https://fonts.googleapis.com/css?family=Karla|Lato:400,700" rel="stylesheet">


    <transition :name="routeTransition" mode="out-in">
      <router-view/>
    </transition>

  </div>
</template>
<script>

export default {
  name: 'App',
  props: {},
  data() {
    return {
      routeTransition: '',
    };
  },
  created() {

  },
  mounted() {

  },
  computed: {},
  methods: {},
  watch: {
    $route(to, from) {
      if (from.name) {
        this.routeTransition = 'page-opac-anim';
      } else {
        this.routeTransition = '';
      }
    },
  },
};
</script>
<style>
  @import '../node_modules/bulma/css/bulma.css';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  #app {
    font-weight: 400;
    color: #444054;
    font-family: 'Lato', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background: #f46036;
  }

  .page-opac-anim-enter-active {
    animation: 300ms translate-from-right ;
  }
  .page-opac-anim-leave-active {
    animation: 300ms opac-fade-in reverse;
  }
  @keyframes translate-from-right {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(0%);
    }
  }

  @keyframes opac-fade-in {
    0% {
      filter: opacity(0%);
    }
    100% {
      filter: opacity(100%)
    }
  }

</style>
