<template>

  <div id="app">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
          integrity="sha384-UHRtZLI+pbxtHCWp1t77Bi1L4ZtiqrqD80Kn4Z8NTSRyMA2Fd33n5dQ8lWUE00s/"
          crossorigin="anonymous">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  props: {},
  data() {
    return {};
  },
  created() {
    //   this.$store.dispatch('loadRecentCommits'); // Load git commits
    //  this.$store.dispatch('loadRecentStatuses'); // Load mastodon statuses
    this.$store.dispatch('initProjects');
  },
  mounted() {

  },
  computed: {},
  methods: {},
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700');
  @import '../node_modules/bulma/css/bulma.css';

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
    min-height: 2528px;
  }

  #app {
    font-weight: 400;
    color: #444054;
    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  ::selection {
    background: #f46036; /* WebKit/Blink Browsers */
  }

  ::-moz-selection {
    background: #f46036; /* Gecko Browsers */
  }
</style>
