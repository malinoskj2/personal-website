<template>

  <div class="root">
    <section class="section content-window">
      <div class="columns">
        <div class="j-text-area">
          <p> This is window 2</p>
        </div>
      </div>
    </section>
  </div>

</template>
<script>
export default {
  name: 'ContentWindow',
  props: {},
  data() {
    return { text: ['Hello! 😀', 'Thanks for stopping by my site.'] };
  },
  computed: {},
  methods: {},
};
</script>
<style scoped>
  .j-text-area {
    margin: 0rem 2rem 0rem 2rem;
    font-size: x-large;
    text-align: left;
    color: #444054
  }

  .root {
    color: #f6f6f6;
  }

  .graphic-a {
    position: absolute;
    left: 48%;
    top: 90%;
  }

  .content-window {

    position: relative;

    margin: 1rem auto 5rem auto;
    overflow: hidden;
    background-color: transparent;
    border: solid #f46036;

    min-height: 30rem;
    width: 34rem;

    border-radius: 30px;
  }

  @-webkit-keyframes grow-in {
    0% {
      transform: scaleX(0) scaleY(.3);
    }
    50% {
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
    50% {
      transform: scaleX(.5) scaleY(.3);
    }
    100% {
      transform: scaleX(1) scaleY(1);
    }
  }

  @-webkit-keyframes half-size {
    0% {
      width: 84rem;
    }
    70% {
      width: 30rem;
    }
    100% {
      width: 34vw;
    }
  }

  @keyframes half-size {
    0% {
      width: 70vw;
    }
    70% {
      width: 30rem;
    }
    100% {
      width: 34vw;
    }
  }
</style>
