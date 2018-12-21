<template>
  <div @click="goToLink">
    <li > {{messageTrimmed}}</li>
  </div>
</template>

<script>
export default {
  name: 'EventItem',
  props: {
    event: Object,
  },
  data() {
    return {};
  },
  computed: {
    source() {
      return this.event.source;
    },
    url() {
      return this.event.url;
    },
    time() {
      return this.event.time;
    },
    message() {
      return this.event.message;
    },
    messageTrimmed() {
      const trimmed = this.event.message.split('\n');
      return (trimmed.length < 2) ? trimmed[0] : trimmed[0].concat('...');
    },
  },
  methods: {
    goToLink() {
      window.location = this.event.url;
    },
  },
};
</script>

<style scoped>
  div {
      positon:relative;
  }
  img:hover {
    cursor:pointer;
  }
  li {
    list-style-type: none;
    postion:absolute;
  }
  li:hover {
    cursor:pointer;
  }
  .source-icon {
    position: absolute;
    margin-top: .45rem;
    left: 1rem;

  }
  img {
    top: 0;
    left: 0;
    postion: absolute;
   }
</style>
