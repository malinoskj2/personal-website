<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'App',
  props: {},
  data() {
    return {
    };
  },
  created() {
    this.$store.commit({
      type: 'addLink',
      website: process.env.VUE_APP_WEBSITE_A,
      url: process.env.VUE_APP_LINK_A,
    });
    this.$store.commit({
      type: 'addLink',
      website: process.env.VUE_APP_WEBSITE_B,
      url: process.env.VUE_APP_LINK_B,
    });
    this.$store.commit({
      type: 'addLink',
      website: process.env.VUE_APP_WEBSITE_C,
      url: process.env.VUE_APP_LINK_C,
    });
    this.$store.commit({
      type: 'addLink',
      website: process.env.VUE_APP_WEBSITE_D,
      url: process.env.VUE_APP_LINK_D,
    });
  },
  computed: {
  },
  methods: {},
};
</script>
<style>
  @import url('https://fonts.googleapis.com/css?family=Josefin+Sans:300,400,600,700');

  html {
    font-size: 100%;

    min-height: 2528px;
    background-color: #f6f6f6;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='4' height='4' viewBox='0 0 4 4'%3E%3Cpath fill='%239C92AC' fill-opacity='0.4' d='M1 3h1v1H1V3zm2-2h1v1H3V1z'%3E%3C/path%3E%3C/svg%3E");
  }

  #app {

    text-align: center;
    font-weight: 400;
    color: black;

    font-family: 'Josefin Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

  }

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
