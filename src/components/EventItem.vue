<template>
    <li @click="goToLink"> {{messageTrimmed}} </li>

</template>

<script>
export default {
  name: 'EventItem',
  props: {
    event: Object,
  },
  data() {
    return { };
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

</style>
