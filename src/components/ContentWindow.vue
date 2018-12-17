<template>

<div class="root">
  <section class="section content-window">
  <div class="columns is-centered">

  </div>
    <img class="graphic-a" src="../assets/sputnik.svg" width="200" height="40"/>
  </section>
</div>

</template>
<script>
export default {
  name: 'ContentWindow',
  props: {},
  data() {
    return { locale: 'en' };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>

  .graphic-a {
    position: absolute;
    left: 48%;
    top: 90%;
  }

  .content-window {
    position: relative;

    margin: 1rem auto 5rem auto;
    overflow: hidden;
    background-color:#444054;

    min-height: 30rem;
    width: 70vw;
    filter: drop-shadow(5px 5px 2px rgba(39, 39, 39, 0.31));
    transform:scaleX(0);

     border-radius: 30px;
    -webkit-animation: grow-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
    animation: grow-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000) both;
  }

  @-webkit-keyframes grow-in {
    0% {
      transform: scaleX(0) scaleY(.3);
    }
    50%{
      transform: scaleX(.5) scaleY(.3);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }
  @keyframes fade-in {
    0% {
      transform: scaleX(0) scaleY(.3);
    }
    50%{
      transform: scaleX(.5) scaleY(.3);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }

</style>
