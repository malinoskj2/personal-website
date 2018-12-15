<template>
  <div id="root">
    <svg id="inner-rect" >
      <rect width="100%" height="100%"/>
      <text id="cb-text" x="50%" y="90%" font-weight="600" > {{link.website}}</text>
    </svg>
  </div >

</template>

<script>
export default {
  name: 'ContentBoxBorder',
  props: {
    link: Object,
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
  #cb-text{

    fill: #f6f6f6;

    text-anchor: middle;
    font-weight: 600;
  }

  #inner-rect {
    position:relative;
    fill: #393d3f;
    width: 94%;
    height: 88%;
    padding: .5rem;
    border-radius: 25px;
    z-index: 1;
  }

#root {
  z-index: -100;
  positon: absolute;
  overflow: hidden;
  width: 16rem;
  height: 8rem;
  background-color: #444054;

  box-shadow: 0 10px 6px -6px #777;
  border-radius: 5px;

}

</style>
