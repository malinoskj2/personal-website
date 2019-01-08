<template>
  <div id="intro-text">
      <p> {{introTextContent}}</p>
  </div>
</template>

<script>
export default {
  name: 'IntroText',
  props: {
    introTextContent: {
      type: String,
      default: 'no content provided',
    },
    linkedSites: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>

</style>
