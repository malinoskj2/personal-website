<template>

      <a class="icon is-large icon-link" :href="link.url">
             <i :class="icon"></i>
      </a>


</template>

<script>
export default {
  name: 'MediaButtons',
  props: {
    link: Object,
    icon: String,
  },
  data() {
    return { };
  },
  computed: {
  },
  methods: {
  },
};
</script>
<style scoped>
  .icon-link {
    color: #444054;
  }
</style>
