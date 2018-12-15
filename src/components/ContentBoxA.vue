<template>
  <div id="root">
    <svg id="inner-rect" >
      <rect width="100%" height="100%"/>
    </svg>

  </div >

</template>

<script>
export default {
  name: 'ContentBoxA',
  props: {
    links: Array,
  },
  data() {

  },
  computed: {

  },
  methods: {
  },
};
</script>

<style scoped>
  #inner-rect {
    fill: #393d3f;
    width: 94%;
    height: 88%;
    padding: .5rem;
    border-radius: 25px;
  }

#root {
  positon: relative;
  overflow: hidden;
  width: 16rem;
  height: 8rem;
  background-color: #444054;

  box-shadow: 0 10px 6px -6px #777;
  border-radius: 5px;

}

</style>
